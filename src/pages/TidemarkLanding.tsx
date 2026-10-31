import { Link } from "react-router-dom";
import { AppLegalLayout, TIDEMARK_LINKS } from "./AppLegalLayout";
import { TidemarkHelpList } from "./TidemarkHelp";

export function TidemarkLanding() {
  return (
    <AppLegalLayout
      className="tm-landing"
      product="Tidemark: Backup & Restore"
      icon="/tidemark/tidemark-app-icon.svg"
      links={TIDEMARK_LINKS}
      title="Undo bad edits in your Shopify store"
    >
      <p className="tm-lead">
        Tidemark saves every change to your products, collections, discounts
        and content. When an import, an app, an AI tool or a teammate gets
        something wrong, put back the whole item or only the field that broke.
      </p>
      <p>
        <span className="tm-cta">Coming soon to the Shopify App Store</span>
      </p>

      <div className="tm-features">
        <section className="tm-feature">
          <h2>Every change, saved within seconds</h2>
          <p>
            Products, collections, discounts and themes are saved as they
            change. Pages, blog posts, menus, files and more are checked every
            30 minutes, and the whole store is backed up every night.
          </p>
        </section>
        <section className="tm-feature">
          <h2>Restore only what broke</h2>
          <p>
            Bring back last week's prices without touching this week's
            descriptions. Pick the parts: prices, description, images,
            variants, metafields, collections or sales channels.
          </p>
        </section>
        <section className="tm-feature">
          <h2>Undo a bad import or AI edit in one step</h2>
          <p>
            The time machine rolls back the products, collections, discounts
            and content that changed in a window of time. Stock comes back by
            the difference, so sales made since are kept.
          </p>
        </section>
        <section className="tm-feature">
          <h2>Deleted by mistake? It's in the recycle bin</h2>
          <p>
            Shopify can't restore a deleted product. Tidemark brings it back
            with its images and collections.
          </p>
        </section>
        <section className="tm-feature">
          <h2>Know before your customers do</h2>
          <p>
            Alerts flag an app or import that changes many items at once, and
            a Monday email sums up the week.
          </p>
        </section>
        <section className="tm-feature">
          <h2>Every version of every theme</h2>
          <p>
            See the lines that changed in each file, every time the theme is
            saved.
          </p>
        </section>
        <section className="tm-feature">
          <h2>Take your data with you</h2>
          <p>
            Download any nightly backup or your products as a CSV you can
            import back into Shopify, on every plan.
          </p>
        </section>
        <section className="tm-feature">
          <h2>Undo the undo</h2>
          <p>
            Tidemark saves the live state before every restore, so any restore
            can be reversed.
          </p>
        </section>
      </div>

      <h2>Pricing</h2>
      <p>
        Every feature on every plan. Free up to 50 orders a month, paid plans
        from $9 a month, each with a 14-day free trial. No overage fees,
        backups never stop if your store outgrows its plan, and your price
        only changes if you pick a new plan.
      </p>

      <h2>Questions</h2>
      <h3>What if my store outgrows its plan?</h3>
      <p>
        Backups keep running. Tidemark suggests the plan that fits, and you
        decide.
      </p>
      <h3>Can I undo a restore?</h3>
      <p>Yes. The live state is saved before every restore.</p>
      <h3>Where is my data kept?</h3>
      <p>
        The <Link to="/tidemark/privacy">privacy policy</Link> says what
        Tidemark stores, where and for how long.
      </p>

      <h2>Help articles</h2>
      <TidemarkHelpList />
    </AppLegalLayout>
  );
}
