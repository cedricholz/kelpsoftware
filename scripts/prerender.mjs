// Writes each page's own HTML into dist/ after both Vite builds (npm run build): its markup,
// title, description, canonical link and link-preview tags. "/" becomes dist/index.html and
// "/tidemark/support" becomes dist/tidemark/support/index.html, which CloudFront serves for
// that address (infra/site.yml). Also writes dist/404.html and dist/sitemap.xml.
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const { render, PAGES, NOT_FOUND, SITE_URL } = await import(
  pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href
);

const template = await readFile(path.join(dist, "index.html"), "utf8");
const META = /<!-- page-meta[\s\S]*?<!-- \/page-meta -->/;
const ROOT = '<div id="root"></div>';
if (!META.test(template) || !template.includes(ROOT)) {
  throw new Error("dist/index.html has lost its page-meta block or its empty root div");
}

const OG_IMAGE = `${SITE_URL}/kelp-og-1200x630.png`;
const attr = (text) =>
  text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** The 404 page is kept out of search results and has no address of its own. */
function headTags(page, isPage) {
  const url = SITE_URL + page.path;
  const tags = [
    `<title>${attr(page.title)}</title>`,
    `<meta name="description" content="${attr(page.description)}" />`,
    isPage ? `<link rel="canonical" href="${url}" />` : `<meta name="robots" content="noindex" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Kelp Software" />`,
    `<meta property="og:title" content="${attr(page.title)}" />`,
    `<meta property="og:description" content="${attr(page.description)}" />`,
    isPage && `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:type" content="image/png" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Kelp Software logo" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${attr(page.title)}" />`,
    `<meta name="twitter:description" content="${attr(page.description)}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
    `<meta name="twitter:image:alt" content="Kelp Software logo" />`,
  ];
  return tags.filter(Boolean).join("\n    ");
}

function html(page, isPage) {
  return template
    .replace(META, () => headTags(page, isPage))
    .replace(ROOT, () => `<div id="root" data-path="${page.path}">${render(page.path)}</div>`);
}

for (const page of PAGES) {
  const file = path.join(dist, ...page.path.split("/").filter(Boolean), "index.html");
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, html(page, true));
}
await writeFile(path.join(dist, "404.html"), html(NOT_FOUND, false));

const urls = PAGES.map((page) => `  <url><loc>${SITE_URL}${page.path}</loc></url>`);
await writeFile(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`,
);

console.log(`Prerendered ${PAGES.length} pages, 404.html and sitemap.xml`);
