import { Link } from "react-router-dom";
import { AppLegalLayout, TIDEMARK_LINKS } from "./AppLegalLayout";

export function TidemarkSupport() {
  return (
    <AppLegalLayout
      product="Tidemark: Backup & Restore"
      icon="/tidemark/tidemark-app-icon.svg"
      links={TIDEMARK_LINKS}
      title="Support"
    >
      <p>
        Tidemark backs up your Shopify store's products, collections, and
        media every night and lets you restore anything that changes or goes
        missing.
      </p>

      <h2>Get help</h2>
      <p>
        Email{" "}
        <a href="mailto:support@kelpsoftware.com">support@kelpsoftware.com</a>{" "}
        with your store's domain (for example, your-store.myshopify.com) and a
        short description of the problem.
      </p>

      <h2>Data and privacy</h2>
      <p>
        To ask what data we hold for your store or to have it deleted, email
        the same address from your store's contact email. See the{" "}
        <Link to="/tidemark/privacy">Privacy Policy</Link> for what Tidemark
        stores, how long it keeps it, and what happens when you uninstall.
      </p>
    </AppLegalLayout>
  );
}
