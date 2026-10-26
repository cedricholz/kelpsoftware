# Kelp Software site

Static React (Vite + TS) site for kelpsoftware.com, plus the privacy, terms,
and support pages for Kelp's apps.

## Local dev

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # serve the built dist/ locally
```

## Pages

| Path                     | Page                                  |
| ------------------------ | ------------------------------------- |
| `/`                      | Home                                  |
| `/stacks/privacy-policy` | Stacks privacy policy                 |
| `/stacks/terms`          | Stacks terms of service               |
| `/tidemark/privacy`      | Tidemark privacy policy (App Store listing) |
| `/tidemark/support`      | Tidemark support (App Store listing)  |

App pages share `src/pages/AppLegalLayout.tsx`. The Tidemark URLs are linked
from the Shopify App Store listing, so keep them stable. Shopify warns apps
whose privacy link goes dead.

## Brand assets

`brand/` holds the source kits; `public/` holds only what the site serves.

- `brand/` – Kelp Software kit (start with `brand/START-HERE.txt`)
- `brand/tidemark/` – Tidemark app kit (`brand/tidemark/START-HERE.txt`)

Colors are defined once as CSS variables at the top of `src/styles.css`.

## Deploying

Pushing to `main` deploys automatically. `.github/workflows/deploy.yml`
builds the site, syncs `dist/` to S3, and invalidates CloudFront. It takes
about 20 seconds. To redeploy without a code change, run the **Deploy**
workflow from the repo's Actions tab.

The workflow authenticates with GitHub OIDC; no AWS keys are stored in GitHub.
It assumes `kelpsoftware-site-github-deploy`, a role created by
`infra/deploy-role.yml` (stack `kelpsoftware-site-deploy`, us-west-1). The role
only trusts pushes to `main` in this repo and can only write to the site bucket
and invalidate its distribution.

Caching: files under `assets/` are content-hashed and cached for a year.
Everything else (HTML, favicons, logos, manifest) revalidates on every
request, so replacing them takes effect on the next deploy.

### Where it lives

| Thing                   | Value                                   |
| ----------------------- | --------------------------------------- |
| AWS account             | 433723587324                            |
| S3 bucket               | `kelpsoftware-site` (us-west-1, private) |
| CloudFront distribution | `E1LOPE4QDIH8SX`                        |
| Domains                 | kelpsoftware.com, www.kelpsoftware.com  |

`infra/site.yml` describes the bucket and distribution: a private bucket that
only CloudFront can read (Origin Access Control). Unknown paths return
`index.html`, so client-side routes like `/tidemark/privacy` work on a direct
load.

### Manual deploy (fallback)

With credentials for the account above:

```bash
npm run build
aws s3 sync dist/assets s3://kelpsoftware-site/assets --delete \
  --cache-control "public,max-age=31536000,immutable"
aws s3 sync dist/ s3://kelpsoftware-site/ --delete --exclude "assets/*" \
  --cache-control "public,max-age=0,must-revalidate"
aws cloudfront create-invalidation --distribution-id E1LOPE4QDIH8SX --paths "/*"
```

## What this costs

For a low-traffic site, effectively nothing: a few MB of S3 storage, and
CloudFront's free tier (1 TB out and 10M requests a month). GitHub Actions
minutes are free for this usage.
