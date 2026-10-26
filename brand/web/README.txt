KELP SOFTWARE — WEBSITE ASSETS

QUICK SETUP

1. Copy the favicon and icon image files from this folder to your site's public
   root. In many React projects this is the public/ directory. Serve these files
   at URLs such as /favicon.svg and /apple-touch-icon.png.

2. Copy ../social/kelp-og-1200x630.png to the same public root, so its URL is
   /kelp-og-1200x630.png.

3. Add the contents of head.html to the HTML document's <head>, or express the
   equivalent metadata through your framework. Replace every https://example.com
   occurrence with your real public HTTPS origin. Set og:url and the page title
   for each page. The image URL must be public and reachable without signing in.

4. If you want an installed web-app experience, copy site.webmanifest to the
   public root and keep its link in head.html. Before publishing, review its id,
   start_url, scope, names and display mode for the actual application. The
   defaults assume the app is served at the domain root. For a normal website,
   you may omit the manifest link and file. The manifest alone does not add
   offline support.

5. Open the deployed favicon and social-image URLs to check that they return
   the actual files. Serve SVG as image/svg+xml, PNG as image/png, and the
   manifest as application/manifest+json. Check the Manifest pane in browser
   developer tools when using the manifest. Browsers and social platforms cache
   icons and previews; refresh their caches when replacing existing branding.

FILES

favicon.svg
  Scalable browser-tab K. Its internal prefers-color-scheme rule provides a
  light-color mark for dark-mode browser contexts. It follows the browser's
  media preference, not necessarily a website's manual theme switch.

favicon.ico
  Browser fallback with 16x16, 32x32 and 48x48 images in one file.

favicon-16.png and favicon-32.png
  Additional raster favicon exports for platforms that request a PNG. The
  supplied head.html already uses SVG plus ICO, so these PNGs do not need
  additional link tags for that setup.

apple-touch-icon.png
  180x180 opaque icon for an Apple home-screen shortcut.

icon-192.png and icon-512.png
  General 192x192 and 512x512 manifest icons, declared with purpose "any".

icon-maskable-512.png
  Separate 512x512 opaque icon with extra room for operating-system masks.
  Keep the supplied padding and full-bleed background. The important K shape
  fits inside the centered safe circle with radius 40% of the canvas width.

../social/kelp-og-1200x630.png
  Opaque 1200x630 social-preview image. This is a practical landscape export;
  Open Graph itself does not mandate those dimensions. Social platforms may
  crop the preview differently.

LOGOS INSIDE YOUR WEBSITE

Use the SVG logo files elsewhere in the kit for page headers, footers and other
brand placements. The logo lettering is outlined, so no font installation is
needed. Preserve the artwork's proportions. Give an informative logo image
alt text such as "Kelp Software"; if it is purely decorative next to the same
visible name, use an empty alt attribute. Use the reverse or light artwork on
dark surfaces rather than displaying the dark green artwork without contrast.

PALETTE

Primary green: #0B5145
Teal:          #008777
Mint:          #B7E4D1
Off-white:     #F5F8F5

REFERENCE DOCUMENTATION

Icon selection and link attributes:
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel#icon

SVG and prefers-color-scheme:
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme

Manifest icon fields and relative URL handling:
https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/icons

Web-app manifest and Chromium icon sizes:
https://web.dev/articles/add-manifest

Maskable-icon safe circle:
https://w3c.github.io/manifest/#icon-masks

Apple web-clip icons:
https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html

Open Graph metadata:
https://ogp.me/
