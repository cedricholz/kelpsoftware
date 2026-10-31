import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { App } from "./App";

export { NOT_FOUND, PAGES, SITE_URL } from "./site";

/** The markup of the page at this address, for scripts/prerender.mjs. */
export function render(url: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
}
