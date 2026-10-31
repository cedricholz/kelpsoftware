import { Link } from "react-router-dom";
import { AppLegalLayout, TIDEMARK_LINKS } from "./AppLegalLayout";

export function TidemarkHelpBadImport() {
  return (
    <AppLegalLayout
      product="Tidemark: Backup & Restore"
      icon="/tidemark/tidemark-app-icon.svg"
      links={TIDEMARK_LINKS}
      title="How to undo a bad bulk edit or CSV import in Shopify"
    >
      <p>
        A CSV import overwrote your prices, or a bulk edit hit the wrong
        products. Here's how to limit the damage and put things back, with or
        without a backup.
      </p>

      <h2>First, stop the damage</h2>
      <p>
        If an app or a sync made the change, pause it before you fix
        anything, or it may make the same change again. If it was a CSV
        import, don't run the file again. Shopify can't cancel an import once
        it starts.
      </p>

      <h2>What Shopify keeps</h2>
      <p>
        Less than you'd hope. Products have no version history in Shopify, so
        there's no earlier version to roll back to, and Shopify doesn't keep
        a history of past imports. The{" "}
        <a href="https://help.shopify.com/en/manual/shopify-admin/activity-logs">
          store activity log
        </a>{" "}
        (in Settings, under General) shows who changed a product, and
        sometimes which fields changed, but it doesn't record everything and
        it can't put anything back.
      </p>
      <p>
        Stock is a partial exception: each product's inventory adjustment
        history lists every change and who made it, so you can see which
        counts to set back by hand.
      </p>

      <h2>Fix it from an export taken before the change</h2>
      <p>
        If you exported your products before the import or bulk edit, that
        file holds the values you want back, and Shopify can import it over
        your current products. First, trim the file so it only changes what
        broke:
      </p>
      <ol>
        <li>
          Delete every column that didn't break. Keep the handle and title
          columns, which Shopify requires, and the columns you want back, such
          as prices.
        </li>
        <li>
          If the broken values belong to variants, such as prices or SKUs,
          keep the option name and value columns too. Without them, Shopify
          deletes the product's variants and creates a single default one in
          their place.
        </li>
        <li>
          Leave out the inventory columns, so old stock counts can't overwrite
          the sales you've made since.
        </li>
        <li>Delete the rows of any product you don't want to change.</li>
        <li>
          Go to Products, click Import, choose the file and select{" "}
          <strong>Overwrite products with matching handles</strong>.
        </li>
      </ol>
      <p>
        Two things to watch. A blank cell in a column you kept clears that
        value, so check that the columns you kept are filled in. And products
        added since the export aren't in the file, so they stay as they are.
      </p>
      <p>
        No export? Then each product has to be fixed by hand, using the
        activity log to find what changed.
      </p>

      <h2>Next time: export first, test small</h2>
      <p>
        Export your products before every import or bulk edit, so you always
        have a copy to go back to.{" "}
        <a href="https://help.shopify.com/en/manual/products/import-export/import-products">
          Shopify's Help Center
        </a>{" "}
        gives the same advice: make sure you have a backup of your product
        data before you start an import. Then try the import on a few
        products, check them, and only then run the whole file.
      </p>

      <h2>With Tidemark: undo it in one step</h2>
      <p>
        Tidemark saves every change to your products within seconds, so it
        knows exactly what the import or bulk edit changed. Open the time
        machine, pick the window when it happened and undo everything that
        changed in it. Stock comes back by the difference, so sales made since
        are kept.
      </p>
      <p>
        If only one thing broke, restore just that part, such as prices, and
        leave the rest alone. And if you'd rather fix it with a file, download
        your products exactly as they were at any moment, as a CSV in
        Shopify's import format.
      </p>
      <p>
        Tidemark can only undo changes it saw, so it needs to be installed
        before the import. From then on, its alerts flag an app or import that
        changes many items at once, so you hear about it before your customers
        do.
      </p>
      <p className="tm-note">
        Tidemark is coming soon to the Shopify App Store.{" "}
        <Link to="/tidemark">See what else it can undo</Link>.
      </p>
    </AppLegalLayout>
  );
}
