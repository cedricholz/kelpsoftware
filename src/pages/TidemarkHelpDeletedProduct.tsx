import { Link } from "react-router-dom";
import { AppLegalLayout, TIDEMARK_LINKS } from "./AppLegalLayout";

export function TidemarkHelpDeletedProduct() {
  return (
    <AppLegalLayout
      product="Tidemark: Backup & Restore"
      icon="/tidemark/tidemark-app-icon.svg"
      links={TIDEMARK_LINKS}
      title="How to restore a deleted product in Shopify"
    >
      <p>
        Deleted a product by mistake? Here's what Shopify can and can't do
        about it, how to rebuild the product by hand, and how to make the next
        mistake easy to undo.
      </p>

      <h2>The short answer: Shopify can't restore it</h2>
      <p>
        When you delete a product, Shopify removes it for good. Its Help
        Center says it plainly:{" "}
        <a href="https://help.shopify.com/en/manual/products/add-update-products#delete-a-product">
          deleted products can't be restored
        </a>
        . There's no trash to dig it out of, so without a backup you'll have
        to rebuild it.
      </p>

      <h2>Rebuild it by hand</h2>
      <p>There are three places to rebuild it from, depending on what you have.</p>
      <ul>
        <li>
          <strong>An old product export.</strong> If you exported your
          products to a CSV file before the product was deleted, its rows are
          still in that file. Keep the header row and the product's own rows,
          delete the rest, then go to Products, click Import and choose the
          file. If the image links in the file no longer work, add the images
          again by hand.
        </li>
        <li>
          <strong>Past orders.</strong> Orders keep a copy of what was sold.
          Open an order that included the product to find its title, variant
          names, SKU and price, then add the product again under Products.
        </li>
        <li>
          <strong>Anywhere else it's listed.</strong> If you also sell the
          product on a marketplace or in a second store, copy its title,
          description and photos from there.
        </li>
      </ul>
      <p>
        Give the rebuilt product the same URL handle it had before, so links
        to it from search results, emails and ads keep working.
      </p>

      <h2>Next time: archive instead of deleting</h2>
      <p>
        If you want to stop showing a product but keep it, archive it instead
        of deleting it, as{" "}
        <a href="https://help.shopify.com/en/manual/products/add-update-products#archive-a-product">
          Shopify suggests
        </a>
        . An archived product moves to the Archived tab under Products, and
        you can unarchive it whenever you like. It comes back as a draft,
        ready to check and make active again.
      </p>

      <h2>With Tidemark: restore it from the recycle bin</h2>
      <p>
        Tidemark saves every change to your products within seconds, so the
        product as it was just before it was deleted is already backed up.
        Open the recycle bin in Tidemark, find the product and restore it. It
        comes back with its images and collections.
      </p>
      <p>
        Tidemark can only restore what it saved, so it needs to be installed
        before the product is deleted. Deleted products stay in the recycle
        bin for the length of history your plan keeps.
      </p>
      <p className="tm-note">
        Tidemark is coming soon to the Shopify App Store.{" "}
        <Link to="/tidemark">See what else it can undo</Link>.
      </p>
    </AppLegalLayout>
  );
}
