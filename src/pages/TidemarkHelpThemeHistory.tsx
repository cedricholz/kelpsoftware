import { Link } from "react-router-dom";
import { AppLegalLayout, TIDEMARK_LINKS } from "./AppLegalLayout";

export function TidemarkHelpThemeHistory() {
  return (
    <AppLegalLayout
      product="Tidemark: Backup & Restore"
      icon="/tidemark/tidemark-app-icon.svg"
      links={TIDEMARK_LINKS}
      title="How to see what changed in a Shopify theme"
    >
      <p>
        A page looks wrong after a theme edit, and nobody is sure what
        changed. Here's how to find out with Shopify's own tools, where they
        stop, and how Tidemark shows every change to every file.
      </p>

      <h2>Before you edit: duplicate the theme</h2>
      <p>
        Shopify recommends duplicating a theme before you edit its code. The
        copy is your backup: if the edit goes wrong, you can discard it and
        start again from the copy.
      </p>

      <h2>Shopify's built-in history: Timeline</h2>
      <p>
        Shopify's code editor keeps a Timeline for most theme files. Open the
        file, pick an earlier entry in its Timeline and choose Restore
        contents to put that version back. It's useful, but{" "}
        <a href="https://help.shopify.com/en/manual/online-store/themes/customizing-themes/edit-code/edit-theme-code">
          the Help Center
        </a>{" "}
        lists its limits:
      </p>
      <ul>
        <li>It works one file at a time and can't bring back a whole theme.</li>
        <li>Deleted theme files can't be recovered.</li>
        <li>History is finite, so older versions might not be there.</li>
        <li>
          Files in the assets folder, such as images, CSS, JavaScript and
          fonts, have no Timeline at all.
        </li>
        <li>
          Restoring replaces the whole file, including changes you meant to
          keep, so copy the current contents first.
        </li>
      </ul>

      <h2>With Tidemark: every version, line by line</h2>
      <p>
        Tidemark saves every theme in your store each time it changes, with
        every file in it, assets included. Open a theme in Tidemark to see
        each saved version and exactly which lines changed in each file, so
        you can tell what broke the page and when.
      </p>
      <p>History goes back as far as your plan keeps it.</p>

      <h2>Next time: duplicate first, and keep a history</h2>
      <p>
        Duplicate the theme before big edits, and keep Tidemark running for
        the edits nobody planned: an app that adds code to your theme, a
        teammate's quick fix, or a change in the theme editor that breaks a
        page.
      </p>
      <p className="tm-note">
        Tidemark is coming soon to the Shopify App Store.{" "}
        <Link to="/tidemark">See what else it saves</Link>.
      </p>
    </AppLegalLayout>
  );
}
