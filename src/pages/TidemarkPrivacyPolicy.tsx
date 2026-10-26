import { AppLegalLayout, TIDEMARK_LINKS } from "./AppLegalLayout";

export function TidemarkPrivacyPolicy() {
  return (
    <AppLegalLayout
      product="Tidemark: Backup & Restore"
      icon="/tidemark/tidemark-app-icon.svg"
      links={TIDEMARK_LINKS}
      title="Privacy Policy"
      effectiveDate="October 26, 2026"
    >
      <p>
        This Privacy Policy describes how Kelp Software ("we", "us") collects,
        uses, stores, and deletes information when a merchant installs and
        uses Tidemark: Backup &amp; Restore (the "App") on a Shopify store. By
        installing the App, you agree to this policy.
      </p>
      <p>
        The App exists to back up a store's content and restore it when
        something goes wrong. We collect only what we need to do that.
      </p>

      <h2>Information we collect from Shopify</h2>
      <p>
        When you install the App, you grant it access to parts of your store
        through the Shopify Admin API. The App reads the store content listed
        below. The App uses its write access only to restore data that you
        ask it to restore.
      </p>
      <p>From that access, the App stores:</p>
      <ul>
        <li>
          <strong>Products and collections:</strong> titles, descriptions,
          handles, variants, prices, SKUs, barcodes, inventory item settings
          (cost, weight, country of origin, HS code), tags, metafields, SEO
          fields, collection rules and memberships, and sales channel status.
        </li>
        <li>
          <strong>Stock levels:</strong> the quantity of each product variant
          at each location, and a log of each change (the quantity before and
          after, and when it changed).
        </li>
        <li>
          <strong>Pages and blogs:</strong> pages, blogs, and blog posts,
          including titles, HTML content, SEO fields, and featured images.
        </li>
        <li>
          <strong>Files and media:</strong> copies of product and collection
          images and videos, and of the images, videos, and documents in your
          store's Files section.
        </li>
        <li>
          <strong>Themes:</strong> every file of every theme in your store
          (Liquid, JSON, CSS, JavaScript, and images).
        </li>
        <li>
          <strong>Navigation and store settings:</strong> navigation menus,
          URL redirects, and your store policies (refund, privacy, terms of
          service, shipping, and contact).
        </li>
        <li>
          <strong>Discounts:</strong> titles, codes, values, eligibility
          rules, and usage limits. Where a discount is limited to specific
          customers or customer segments, the App stores only their Shopify
          IDs, not any customer details.
        </li>
        <li>
          <strong>Custom data:</strong> metafield definitions, metaobject
          definitions, and metaobject entries.
        </li>
        <li>
          <strong>Version history:</strong> each changed version of the items
          above, so you can see what changed and restore an earlier version.
        </li>
      </ul>
      <p>
        You can download a copy of any backed-up theme version as a ZIP file.
        Each download link is private and expires after one hour.
      </p>

      <h2>Store and account information</h2>
      <ul>
        <li>
          <strong>Store details:</strong> your shop domain, shop name, the
          store's contact email address, currency, and timezone.
        </li>
        <li>
          <strong>App settings:</strong> your nightly backup time, retention
          period, alert threshold, and an optional alert email address.
        </li>
        <li>
          <strong>Activity records:</strong> the numeric Shopify staff user ID
          of the person who started a backup or restore. We do not store staff
          names or email addresses.
        </li>
        <li>
          <strong>Access tokens:</strong> Shopify access tokens that let the
          App run backups in the background.
        </li>
      </ul>

      <h2>Customer and order data</h2>
      <p>
        The App does not currently request access to, collect, or store your
        customers' personal information or your orders. Discount eligibility
        rules may reference customers by Shopify ID only, as described above.
        If we add customer
        or order backups in the future, we will update this policy before
        that feature is available and will handle that data in line with
        Shopify's protected customer data requirements.
      </p>

      <h2>How we use information</h2>
      <p>
        We use the information above only to provide the App: to take and
        keep backups, show you your backup history and alerts, and restore
        data when you ask. We do not sell or rent your information, share it
        for advertising, or use it for analytics or advertising.
      </p>

      <h2>Billing</h2>
      <p>
        Paid plans are billed through Shopify. Shopify handles payment, and
        the App never receives or stores your payment details.
      </p>

      <h2>Service providers</h2>
      <p>
        We use the following providers to run the App. Each receives only
        what it needs to provide its service:
      </p>
      <ul>
        <li>
          <strong>Render</strong>: hosts the App and its database.
        </li>
        <li>
          <strong>Amazon Web Services (S3)</strong>: stores backed-up images,
          videos, files, theme files, and nightly backup archives.
        </li>
        <li>
          <strong>Shopify</strong>: the platform the App runs on and the
          source of the data it backs up.
        </li>
      </ul>
      <p>
        These providers may store and process data in the United States and
        other countries outside your own. Where the law requires it, we rely
        on appropriate safeguards for international transfers.
      </p>

      <h2>Retention</h2>
      <p>
        The App keeps history for the retention period shown in its
        settings, which depends on your plan.
      </p>
      <ul>
        <li>
          The latest version of each item is always kept while the App is
          installed.
        </li>
        <li>
          If an item is deleted from your store, its last backed-up version is
          kept until the deletion is older than your retention period.
        </li>
        <li>
          Older versions, backup archives, alerts, and activity records are
          deleted automatically each day once they pass your retention
          period.
        </li>
        <li>
          Stored images, files, and theme files that no remaining version uses
          are removed by a weekly cleanup, usually within about a week of no
          longer being needed.
        </li>
      </ul>

      <h2>Uninstalling and deletion</h2>
      <ul>
        <li>Backups stop as soon as you uninstall the App.</li>
        <li>
          Shopify notifies us 48 hours after you uninstall. When it does, we
          erase all data held for your store, including database records,
          images, videos, files, theme files, and archives.
        </li>
        <li>
          As a safeguard, all of your store's data is erased no later than 30
          days after uninstall, even if that notice never arrives.
        </li>
        <li>
          If Shopify reports your store as closed or frozen, its data is
          erased after 90 days.
        </li>
      </ul>
      <p>
        You can also ask us to delete your store's data at any time by
        emailing{" "}
        <a href="mailto:support@kelpsoftware.com">support@kelpsoftware.com</a>{" "}
        from your store's contact email.
      </p>

      <h2>Your rights and requests</h2>
      <p>
        You can view your backups inside the App. Because backups are copies
        of your own store's data, you correct information by changing it in
        your store. To request access to or deletion of data, email{" "}
        <a href="mailto:support@kelpsoftware.com">support@kelpsoftware.com</a>.
        We respond within 30 days.
      </p>
      <p>
        We also respond to Shopify's privacy requests. If your customer asks
        you for their data, or asks you to delete it, Shopify forwards the
        request to us. Today the App holds no customer data, so there is
        nothing to return or delete. If that changes, we will provide or
        delete the requested data within 30 days. When Shopify asks us to
        erase a store's data, we erase everything we hold for that store.
      </p>

      <h2>Security</h2>
      <p>
        All traffic between Shopify, the App, and our providers is encrypted
        in transit using HTTPS/TLS. Backed-up files stored in Amazon S3 are
        encrypted at rest. No system is perfectly secure, but we take
        reasonable steps to protect your information.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. We will post the revised
        policy at this URL with a new effective date. Material changes will
        be communicated in the App or by email where appropriate.
      </p>

      <h2>Contact</h2>
      <p>
        Kelp Software operates the App. Questions or privacy requests? Email{" "}
        <a href="mailto:support@kelpsoftware.com">support@kelpsoftware.com</a>.
      </p>
    </AppLegalLayout>
  );
}
