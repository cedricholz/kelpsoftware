import { Link } from "react-router-dom";
import {
  AppLegalLayout,
  TIDEMARK_APP_STORE_URL,
  TIDEMARK_LINKS,
} from "./AppLegalLayout";

export function TidemarkHelpCopyStore() {
  return (
    <AppLegalLayout
      product="Tidemark: Backup & Restore"
      icon="/tidemark/tidemark-app-icon.svg"
      links={TIDEMARK_LINKS}
      title="How to copy products and content to another Shopify store"
    >
      <p>
        Setting up a staging store, opening a second store, or moving content
        from one store to another? Here's what Shopify gives you, and how
        Tidemark copies products, collections, pages and more between stores.
      </p>

      <h2>What Shopify gives you</h2>
      <p>
        Shopify's{" "}
        <a href="https://help.shopify.com/en/manual/shopify-admin/duplicate-store">
          guide to duplicating a store
        </a>{" "}
        comes down to files and copying by hand:
      </p>
      <ul>
        <li>
          Products move as a CSV file: export them from one store and import
          them into the other. To bring collections along, add a Collection
          column to the file yourself, since exports don't include one, and
          each product can join only one collection that way.
        </li>
        <li>
          Pages and blog posts are copied and pasted, and menus are rebuilt by
          hand.
        </li>
        <li>Discount codes can't be transferred.</li>
      </ul>
      <p>
        On Shopify Plus, a new{" "}
        <a href="https://help.shopify.com/en/manual/organization-settings/expansion-stores">
          expansion store
        </a>{" "}
        can import products, collections, files and themes from another store
        in your organization, but only when you create it. After that, each
        store's content is managed separately.
      </p>

      <h2>With Tidemark: link the two stores</h2>
      <p>
        Tidemark copies items from one store into another, on every plan.
        Both stores need Tidemark installed. In each store, open Copy to store
        in Tidemark's menu, which takes you to the Copy to another store page.
      </p>
      <ol>
        <li>
          In the store that will receive the copies, click{" "}
          <strong>Create a link code</strong> under Copy into this store. The
          code works once and expires after 30 minutes.
        </li>
        <li>
          In the store you're copying from, enter the code under Copy from
          this store.
        </li>
      </ol>
      <p>
        Either store can unlink at any time. Copies already made stay where
        they are.
      </p>

      <h2>Choose what to copy</h2>
      <p>
        Under What to copy, tick the kinds of items you want: products,
        collections, pages, blogs, blog posts, menus, URL redirects, files,
        metafield definitions, metaobject definitions, metaobject entries and
        discounts. You can search to narrow them down.
      </p>
      <p>
        Tidemark then shows a plan of what it will copy and what it will skip.
        If it looks right, click the button that says how many items it will
        copy, such as <strong>Copy 120 items</strong>. One copy holds up to
        5,000 items, so for a bigger store, copy a few kinds at a time.
      </p>
      <p>
        Picking Files leaves out product images, since those come with their
        products.
      </p>

      <h2>What happens to items the other store already has</h2>
      <p>
        A copy never overwrites what's already there. Items the other store
        already has, with the same handle, discount code or automatic discount
        title, are skipped, and so are items an earlier copy already brought
        over.
      </p>
      <p>
        Copied items that point at a skipped item use the other store's
        version. A blog post goes into that store's blog, a menu links to that
        store's product, and a copied product joins that store's collection
        with the same handle. Blog posts and metaobject entries bring their
        blog or definition along when the other store doesn't have it.
      </p>

      <h2>What isn't copied</h2>
      <ul>
        <li>Store policies, since each store keeps its own.</li>
        <li>
          Stock levels, since the stores' locations differ. Copied products
          start with no stock.
        </li>
        <li>App discounts, which only the app that made them can create.</li>
        <li>Themes, customers and orders.</li>
      </ul>

      <h2>Follow the copy, and undo it</h2>
      <p>
        The copy runs in the background. Its page, listed under Restores in
        the store you copied from, shows progress and results. Copies don't
        set off Tidemark's mass-change alerts in the other store.
      </p>
      <p>
        Changed your mind? Click <strong>Undo this copy</strong> on the copy's
        page. It removes everything the copy added that nobody has changed
        since. The undo runs in the other store and shows under that store's
        Restores.
      </p>
      <p className="tm-note">
        Tidemark is on the Shopify App Store.{" "}
        <a href={TIDEMARK_APP_STORE_URL}>Install it free</a> or{" "}
        <Link to="/tidemark">see what else it does</Link>.
      </p>
    </AppLegalLayout>
  );
}
