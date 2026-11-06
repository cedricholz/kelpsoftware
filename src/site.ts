// Each page's title and description. The build writes them into the page's own HTML
// (scripts/prerender.mjs) and lists the pages in sitemap.xml; the app keeps the title and
// description current after in-app navigation.

export const SITE_URL = "https://kelpsoftware.com";

export type PageMeta = { path: string; title: string; description: string };

export const PAGES: PageMeta[] = [
  {
    path: "/",
    title: "Kelp Software",
    description: "Kelp Software is an independent studio building small, useful software.",
  },
  {
    path: "/tidemark",
    title: "Tidemark: undo bad edits in your Shopify store",
    description:
      "Tidemark saves every change to your Shopify products, collections and themes within seconds, so you can undo a bad import or restore a deleted product.",
  },
  {
    path: "/tidemark/privacy",
    title: "Tidemark privacy policy | Kelp Software",
    description:
      "What Tidemark: Backup & Restore stores about your Shopify store, where it's kept, how long it's kept, and how to have it deleted.",
  },
  {
    path: "/tidemark/support",
    title: "Tidemark support | Kelp Software",
    description:
      "Get help with Tidemark: Backup & Restore for Shopify, or ask what data it holds for your store and have it deleted.",
  },
  {
    path: "/tidemark/help/restore-deleted-product",
    title: "How to restore a deleted product in Shopify | Kelp Software",
    description:
      "Shopify can't restore a deleted product. How to rebuild one from an export or past orders, how to avoid it next time, and how Tidemark brings it back.",
  },
  {
    path: "/tidemark/help/undo-bulk-edit-or-csv-import",
    title: "How to undo a bad bulk edit or CSV import in Shopify | Kelp Software",
    description:
      "Shopify can't roll back a bulk edit or product import. How to stop the damage, fix it from an earlier export, and undo it in one step with Tidemark.",
  },
  {
    path: "/tidemark/help/theme-version-history",
    title: "How to see what changed in a Shopify theme | Kelp Software",
    description:
      "What Shopify's theme Timeline can and can't show you, how to protect a theme before editing, and how Tidemark keeps every version of every theme file.",
  },
  {
    path: "/tidemark/help/copy-to-another-store",
    title: "How to copy products and content to another Shopify store | Kelp Software",
    description:
      "Shopify's own ways to copy products, collections and pages between stores, and how Tidemark copies them for you without overwriting what's already there.",
  },
  {
    path: "/stacks/privacy-policy",
    title: "Stacks privacy policy | Kelp Software",
    description:
      "How Stacks, Kelp Software's audiobook player, collects, uses and shares information.",
  },
  {
    path: "/stacks/terms",
    title: "Stacks terms of service | Kelp Software",
    description: "The terms for using Stacks, Kelp Software's personal audiobook player.",
  },
];

/** Served with a 404 status for any address that isn't a page. */
export const NOT_FOUND: PageMeta = {
  path: "/404",
  title: "Page not found | Kelp Software",
  description: "There's no page at this address on kelpsoftware.com.",
};

export function pageFor(pathname: string): PageMeta {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return PAGES.find((page) => page.path === path) ?? NOT_FOUND;
}
