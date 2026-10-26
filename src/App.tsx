import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { StacksPrivacyPolicy } from "./pages/StacksPrivacyPolicy";
import { StacksTerms } from "./pages/StacksTerms";
import { TidemarkPrivacyPolicy } from "./pages/TidemarkPrivacyPolicy";
import { TidemarkSupport } from "./pages/TidemarkSupport";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stacks/privacy-policy" element={<StacksPrivacyPolicy />} />
      <Route path="/stacks/terms" element={<StacksTerms />} />
      <Route path="/tidemark/privacy" element={<TidemarkPrivacyPolicy />} />
      <Route path="/tidemark/support" element={<TidemarkSupport />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
