import { Link } from "react-router-dom";

const ARTICLES = [
  {
    to: "/tidemark/help/restore-deleted-product",
    title: "How to restore a deleted product in Shopify",
    summary: "Shopify can't bring it back. Here's how to rebuild it, and how Tidemark restores it.",
  },
  {
    to: "/tidemark/help/undo-bulk-edit-or-csv-import",
    title: "How to undo a bad bulk edit or CSV import in Shopify",
    summary: "Stop the damage, put things back from an earlier export, or undo it in one step.",
  },
  {
    to: "/tidemark/help/theme-version-history",
    title: "How to see what changed in a Shopify theme",
    summary: "What Shopify's Timeline shows, where it stops, and how to see every change.",
  },
];

/** Tidemark's help articles, listed on the Tidemark and support pages. */
export function TidemarkHelpList() {
  return (
    <ul className="tm-help-list">
      {ARTICLES.map((article) => (
        <li key={article.to}>
          <Link to={article.to}>{article.title}</Link>
          <span>{article.summary}</span>
        </li>
      ))}
    </ul>
  );
}
