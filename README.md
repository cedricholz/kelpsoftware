# Kelp Software site

Static React (Vite + TS) marketing site for kelpsoftware.com.

## Local dev

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # serve the built dist/ locally
```

## Hosting (AWS, cheap)

The infra is one CloudFormation stack: a private S3 bucket for the build
output, fronted by a CloudFront distribution using Origin Access Control
(OAC). The bucket isn't public — only CloudFront can read from it.

### One-time setup

```bash
aws cloudformation deploy \
  --stack-name kelpsoftware-site \
  --template-file infra/site.yml \
  --parameter-overrides BucketName=kelpsoftware-site \
  --capabilities CAPABILITY_NAMED_IAM
```

Grab the outputs:

```bash
aws cloudformation describe-stacks \
  --stack-name kelpsoftware-site \
  --query 'Stacks[0].Outputs'
```

You'll get a `*.cloudfront.net` URL you can hit immediately.

### Deploy from your laptop

```bash
npm run build
aws s3 sync dist/ s3://kelpsoftware-site/ --delete
aws cloudfront create-invalidation \
  --distribution-id <DISTRIBUTION_ID> --paths "/*"
```

### Deploy via CodeBuild

`buildspec.yml` does `npm ci → npm run build → s3 sync → cloudfront
invalidate`. Hook it up by:

1. Create a CodeBuild project pointed at this repo (GitHub source,
   webhook on push to `main`).
2. Use the `aws/codebuild/standard:7.0` image (has Node 22).
3. Set env vars on the project:
   - `SITE_BUCKET` = `kelpsoftware-site`
   - `DISTRIBUTION_ID` = the CloudFront id from the stack outputs
4. Attach an IAM role with: `s3:PutObject`, `s3:DeleteObject`,
   `s3:ListBucket` on the bucket, and
   `cloudfront:CreateInvalidation` on the distribution.

## Custom domain (when you're ready)

1. Request an ACM cert for `kelpsoftware.com` **in `us-east-1`** (CloudFront
   only reads certs from that region).
2. Add `Aliases` and `ViewerCertificate` (with `AcmCertificateArn`,
   `SslSupportMethod: sni-only`, `MinimumProtocolVersion: TLSv1.2_2021`)
   to the distribution in `infra/site.yml`.
3. Point a Route 53 alias (or your registrar's CNAME) at the
   distribution domain.

## What this costs

For a low-traffic landing page, this is effectively free:

- **S3 storage** — a few hundred KB. Pennies per year.
- **CloudFront** — 1 TB out + 10M requests/month free forever.
- **Route 53** (if used) — $0.50/month per hosted zone.
- **ACM cert** — free.

CodeBuild charges per build minute (`general1.small` is ~$0.005/min).
A build here runs in well under a minute.
