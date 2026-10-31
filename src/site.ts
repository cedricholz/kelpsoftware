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
