import { AppLegalLayout, TIDEMARK_LINKS } from "./AppLegalLayout";

export function TidemarkPrivacyPolicy() {
  return (
    <AppLegalLayout
      product="Tidemark: Backup & Restore"
      icon="/tidemark/tidemark-app-icon.svg"
      links={TIDEMARK_LINKS}
      title="Privacy Policy"
      effectiveDate="November 5, 2026"
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
        ask it to restore, and to copy items into another store you've linked
        when you ask it to (see Copying to another store).
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
          at each location, the names of your locations, and a log of each
          change (the quantity before and after, and when it changed).
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
          rules, and usage limits. If your store gives the App access to its
          customers, this includes which customers or customer segments a
          discount is limited to, recorded by their Shopify IDs.
        </li>
        <li>
          <strong>Custom data:</strong> metafield definitions, metaobject
          definitions, and metaobject entries.
        </li>
        <li>
          <strong>Customers:</strong> if your store gives the App access to
          its customers, each customer's name, email address, phone number,
          addresses, language, note, tags, tax exemptions, and metafields;
          their email and SMS marketing status and data sale opt-out; and the
          account's creation and update dates, state, whether its email is
          verified, its number of orders, and the total it has spent.
        </li>
        <li>
          <strong>Orders:</strong> if your store gives the App access to its
          orders, each order's number, email address and phone number,
          customer, shipping and billing addresses, note, tags, PO number,
          custom attributes, line items, shipping lines, discount codes,
          totals, payment and fulfillment status, tracking details, and
          metafields.
        </li>
        <li>
          <strong>Version history:</strong> each changed version of the items
          above, so you can see what changed and restore an earlier version.
        </li>
      </ul>
      <p>
        You can download a nightly backup archive or a products spreadsheet
        (CSV). Download links are private and expire after one hour, and the
        spreadsheets made for a download are deleted within two days. Image links
        inside a products spreadsheet last 7 days so Shopify can import the
        images.
      </p>

      <h2>Store and account information</h2>
      <ul>
        <li>
          <strong>Store details:</strong> your shop domain, shop name, the
          store owner's name, the store's contact email address, currency, and
          timezone. We use the owner's name to address you by name.
        </li>
        <li>
          <strong>App settings:</strong> your nightly backup time, retention
          period, alert threshold, whether the weekly summary email is on, and
          the email address for alerts and summaries. That address starts as
          your store's contact email; you can change it, or clear it to turn
          email off.
        </li>
        <li>
          <strong>Activity records:</strong> the numeric Shopify staff user ID
          of the person who started a backup, restore, or export, or changed
          settings or the plan. We do not store staff names or email
          addresses.
        </li>
        <li>
          <strong>Access tokens:</strong> Shopify access tokens that let the
          App run backups in the background.
        </li>
      </ul>

      <h2>Customer and order data</h2>
      <p>
        The App backs up customers and orders only once your store has given
        it access to them, and handles that data in line with Shopify's
        protected customer data requirements.
      </p>
      <ul>
        <li>
          Customer and order data is kept only in the App's database. It is
          never included in the nightly backup archives, emails, or Kelp
          Software's daily operations report.
        </li>
        <li>
          Restoring a customer or an order puts back the details you choose
          from an earlier version. It never changes a customer's marketing
          consent or data sale opt-out, which only the customer can change.
        </li>
        <li>
          We look at a customer's data only to answer a privacy request or to
          fix a fault. Access to the systems that hold it is limited to Kelp
          Software staff who need it, and is logged.
        </li>
      </ul>

      <h2>Copying to another store</h2>
      <p>
        If another store, such as a staging store, also uses the App, you can
        copy items from one into the other. Both stores have to agree: staff
        in the store receiving the copies create a link code that works once
        and expires after 30 minutes, and staff in the other store enter it.
        Either store can remove the link at any time, and copies already made
        stay where they are.
      </p>
      <ul>
        <li>
          When you copy, the App writes the items you pick from this store's
          backups into the linked store, using that store's own access:
          products, collections, pages, blogs and posts, navigation menus, URL
          redirects, files, metafield and metaobject definitions, metaobject
          entries, and discounts.
        </li>
        <li>
          Copies never include customers, orders, or any other customer
          information. Items the other store already has are skipped, not
          overwritten, though copies can link to them: a copied product can
          join one of that store's collections, for example.
        </li>
        <li>
          Each store's activity records show the link, the other store's
          myshopify.com address, and the Shopify staff user ID of the person who
          created or entered the code, or removed the link. The App also keeps the
          Shopify IDs of the items it copied and of their copies, so later
          copies can skip them and you can undo a copy. Undoing a copy deletes
          only what it added and nobody has changed since.
        </li>
        <li>
          The link and these records are erased along with either store's
          data (see Uninstalling and deletion).
        </li>
      </ul>

      <h2>How we use information</h2>
      <p>
        We use the information above only to provide the App: to take and
        keep backups, show you your backup history and alerts, restore data
        when you ask, and copy items into a store you've linked when you ask.
        The App never contacts your customers, and their
        data is used only for your backups and restores. We do not sell or
        rent your information, share it for advertising, or use it for
        analytics or advertising.
      </p>

      <h2>Emails</h2>
      <p>
        The App emails the address in its settings when many items change or
        are deleted at once, and sends a weekly summary on Monday mornings.
        Once, about two weeks after install, it also sends a short email
        asking how the App is working, with a link to review it on the Shopify
        App Store. That email goes only while the weekly summary is on, and
        never again. Each email contains your store name, the owner's first
        name, counts of changes, and links into the App or to the Shopify App
        Store. Emails never contain customer information. You can unsubscribe from the weekly summary with the
        one-click link in any summary email, and turn alerts off in the App's
        settings.
      </p>
      <p>
        Kelp Software also receives a daily operations report by email. When
        a backup or restore fails or stalls, backups stop, or a store installs
        or uninstalls the App, the report names the store (its name and
        myshopify.com address) along with any error message, which can name
        the items involved. It never contains customer information, and we
        delete each report 30 days after it's sent.
      </p>

      <h2>Billing</h2>
      <p>
        Paid plans are billed through Shopify. Shopify handles payment, and
        the App never receives or stores your payment details. The App stores
        your current plan, Shopify's subscription ID for it, and your trial
        start date.
      </p>

      <h2>Service providers</h2>
      <p>
        We use the following providers to run the App. Each receives only
        what it needs to provide its service:
      </p>
      <ul>
        <li>
          <strong>Render</strong>: hosts the App and its database, which holds
          any customer and order data.
        </li>
        <li>
          <strong>Amazon Web Services (S3 and SES)</strong>: stores backed-up
          images, videos, files, theme files, and nightly backup archives, and
          sends the App's alert, weekly summary and review request emails and
          Kelp Software's daily operations report.
        </li>
        <li>
          <strong>Google Workspace</strong>: hosts Kelp Software's email,
          including support requests and the daily operations report.
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
        settings, which depends on your plan. If you switch to a plan with a
        shorter history, history older than the new period is deleted within
        a day. If a paid plan ends, the App keeps running on the Free plan
        rather than deleting your data.
      </p>
      <ul>
        <li>
          The latest version of each item is always kept while the App is
          installed.
        </li>
        <li>
          For each item, the App also keeps the version that was current at
          the start of your retention period, so you can restore to any moment
          within it.
        </li>
        <li>
          If an item is deleted from your store, its last backed-up version is
          kept until the deletion is older than your retention period.
        </li>
        <li>
          Older versions, backup archives, stock change logs, restore records,
          alerts, and activity records are deleted automatically each day once
          they pass your retention period, except the most recent nightly
          backup archive, which is always kept.
        </li>
        <li>
          Stored images, files, and theme files that no remaining version uses
          are removed by a weekly cleanup, usually within about a week of no
          longer being needed.
        </li>
        <li>
          Daily operations reports, which can name your store, are deleted
          from our email 30 days after they're sent.
        </li>
        <li>
          Customers and orders follow the same rules, and a customer's data is
          erased sooner whenever Shopify asks us to (see Your rights and
          requests).
        </li>
      </ul>

      <h2>Uninstalling and deletion</h2>
      <ul>
        <li>Backups stop as soon as you uninstall the App.</li>
        <li>
          Shopify notifies us 48 hours after you uninstall. When it does, we
          erase all data held for your store, including database records,
          images, videos, files, theme files, and archives. If you've
          installed the App again by then, we keep your data so your history
          carries on.
        </li>
        <li>
          As a safeguard, if the App stays uninstalled, all of your store's
          data is erased no later than 30 days after uninstall, even if that
          notice never arrives.
        </li>
        <li>
          If Shopify reports your store as closed or frozen, its data is
          erased after 90 days, unless the store reopens before then.
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
        We also respond to Shopify's privacy requests. If one of your
        customers asks you for their data, Shopify forwards the request to
        us, and within 30 days we send you everything the App holds about
        that customer. If a customer asks to be deleted, we erase them, the
        orders Shopify names in the request, and their other orders from your
        backups as soon as the request arrives, and remove their ID from your
        discount records. When Shopify asks us to erase a store's data, we
        erase everything we hold for that store, unless the store has
        installed the App again by then.
      </p>

      <h2>Security</h2>
      <p>
        All traffic between Shopify, the App, and our providers is encrypted
        in transit using HTTPS/TLS. The App's database and its backups are
        encrypted at rest with AES-256, and so are backed-up files stored in
        Amazon S3. Access to the App's systems is limited to Kelp Software
        staff who need it, uses strong passwords and two-step sign-in, and is
        logged. No system is perfectly secure, but we take reasonable steps to
        protect your information.
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
