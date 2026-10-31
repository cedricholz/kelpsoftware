import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./styles.css";

const root = document.getElementById("root")!;
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// The build renders each page's HTML ahead of time (scripts/prerender.mjs). Hydrate it when it
// was rendered for this address; anything else, like the 404 page, is rendered afresh.
if (root.dataset.path === window.location.pathname) hydrateRoot(root, app);
else createRoot(root).render(app);
