import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { StacksPrivacyPolicy } from "./pages/StacksPrivacyPolicy";
import { StacksTerms } from "./pages/StacksTerms";
import { TidemarkHelpBadImport } from "./pages/TidemarkHelpBadImport";
import { TidemarkHelpDeletedProduct } from "./pages/TidemarkHelpDeletedProduct";
import { TidemarkHelpThemeHistory } from "./pages/TidemarkHelpThemeHistory";
import { TidemarkLanding } from "./pages/TidemarkLanding";
import { TidemarkPrivacyPolicy } from "./pages/TidemarkPrivacyPolicy";
import { TidemarkSupport } from "./pages/TidemarkSupport";
import { pageFor } from "./site";

export function App() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  // Each page's HTML already has its title and description; this keeps them right after
  // in-app navigation. A followed link opens its page at the top; back, forward and reload
  // leave the scroll position to the browser.
  useEffect(() => {
    const page = pageFor(pathname);
    document.title = page.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", page.description);
    if (navigationType === "PUSH") window.scrollTo(0, 0);
  }, [pathname, navigationType]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stacks/privacy-policy" element={<StacksPrivacyPolicy />} />
      <Route path="/stacks/terms" element={<StacksTerms />} />
      <Route path="/tidemark" element={<TidemarkLanding />} />
      <Route path="/tidemark/privacy" element={<TidemarkPrivacyPolicy />} />
      <Route path="/tidemark/support" element={<TidemarkSupport />} />
      <Route path="/tidemark/help/restore-deleted-product" element={<TidemarkHelpDeletedProduct />} />
      <Route path="/tidemark/help/undo-bulk-edit-or-csv-import" element={<TidemarkHelpBadImport />} />
      <Route path="/tidemark/help/theme-version-history" element={<TidemarkHelpThemeHistory />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
