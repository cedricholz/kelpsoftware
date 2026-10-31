import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { StacksPrivacyPolicy } from "./pages/StacksPrivacyPolicy";
import { StacksTerms } from "./pages/StacksTerms";
import { TidemarkPrivacyPolicy } from "./pages/TidemarkPrivacyPolicy";
import { TidemarkSupport } from "./pages/TidemarkSupport";
import { pageFor } from "./site";

export function App() {
  const { pathname } = useLocation();

  // Each page's HTML already has its title and description; this keeps them right after
  // in-app navigation.
  useEffect(() => {
    const page = pageFor(pathname);
    document.title = page.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", page.description);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stacks/privacy-policy" element={<StacksPrivacyPolicy />} />
      <Route path="/stacks/terms" element={<StacksTerms />} />
      <Route path="/tidemark/privacy" element={<TidemarkPrivacyPolicy />} />
      <Route path="/tidemark/support" element={<TidemarkSupport />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
