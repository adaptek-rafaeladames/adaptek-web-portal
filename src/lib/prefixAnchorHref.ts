/**
 * Converts anchor-only hrefs (#section) to root-prefixed hrefs (/#section)
 * when the visitor is not on the home page.
 *
 * Anchor-only links like "#services" work correctly on "/" because those
 * sections exist there. On sub-pages like /privacy or /accessibility, the
 * same href would do nothing — the browser just appends the fragment to the
 * current URL and finds no matching element.
 *
 * Hrefs that already start with "/" or any other scheme are returned
 * unchanged, so absolute paths and intent-bearing CTAs (/?intent=consult#contact)
 * are never double-prefixed.
 *
 * The skip-to-content link (#main-content) is intentionally excluded from
 * this utility — every page has <main id="main-content">, so it works
 * everywhere without prefixing.
 *
 * @example
 *   prefixAnchorHref("#services",  "/")           // → "#services"
 *   prefixAnchorHref("#services",  "/privacy")    // → "/#services"
 *   prefixAnchorHref("/privacy",   "/")           // → "/privacy"
 *   prefixAnchorHref("/?intent=consult#contact", "/privacy") // → "/?intent=consult#contact"
 */
export function prefixAnchorHref(href: string, pathname: string): string {
  if (href.startsWith("#") && pathname !== "/") {
    return `/${href}`;
  }
  return href;
}
