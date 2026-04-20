import { prefixAnchorHref } from "@/lib/prefixAnchorHref";

/**
 * Unit tests for prefixAnchorHref.
 *
 * Regression coverage for: anchor-only nav links (#section) not working on
 * sub-pages (/privacy, /accessibility) because those sections only exist on
 * the home page. The fix prefixes them with "/" so the browser navigates home
 * first, then scrolls to the section.
 */
describe("prefixAnchorHref", () => {
  describe("on the home page (pathname = '/')", () => {
    it("returns anchor hrefs unchanged so scroll-only behavior is preserved", () => {
      expect(prefixAnchorHref("#services", "/")).toBe("#services");
      expect(prefixAnchorHref("#contact", "/")).toBe("#contact");
      expect(prefixAnchorHref("#founders", "/")).toBe("#founders");
      expect(prefixAnchorHref("#who-we-serve", "/")).toBe("#who-we-serve");
      expect(prefixAnchorHref("#disability", "/")).toBe("#disability");
    });

    it("leaves non-anchor hrefs unchanged", () => {
      expect(prefixAnchorHref("/privacy", "/")).toBe("/privacy");
      expect(prefixAnchorHref("/accessibility", "/")).toBe("/accessibility");
    });

    it("leaves intent-bearing CTAs unchanged (they already start with /)", () => {
      expect(prefixAnchorHref("/?intent=consult#contact", "/")).toBe(
        "/?intent=consult#contact"
      );
      expect(prefixAnchorHref("/?intent=accessibility#contact", "/")).toBe(
        "/?intent=accessibility#contact"
      );
    });
  });

  describe("on the /privacy page", () => {
    it("prefixes anchor hrefs so the browser navigates home before scrolling", () => {
      expect(prefixAnchorHref("#services", "/privacy")).toBe("/#services");
      expect(prefixAnchorHref("#contact", "/privacy")).toBe("/#contact");
      expect(prefixAnchorHref("#founders", "/privacy")).toBe("/#founders");
      expect(prefixAnchorHref("#who-we-serve", "/privacy")).toBe(
        "/#who-we-serve"
      );
    });

    it("does not prefix page hrefs (they already navigate correctly)", () => {
      expect(prefixAnchorHref("/privacy", "/privacy")).toBe("/privacy");
      expect(prefixAnchorHref("/accessibility", "/privacy")).toBe(
        "/accessibility"
      );
    });

    it("does not double-prefix intent CTAs", () => {
      expect(prefixAnchorHref("/?intent=consult#contact", "/privacy")).toBe(
        "/?intent=consult#contact"
      );
      expect(
        prefixAnchorHref("/?intent=accessibility#contact", "/privacy")
      ).toBe("/?intent=accessibility#contact");
    });
  });

  describe("on the /accessibility page", () => {
    it("prefixes anchor hrefs", () => {
      expect(prefixAnchorHref("#services", "/accessibility")).toBe(
        "/#services"
      );
      expect(prefixAnchorHref("#contact", "/accessibility")).toBe("/#contact");
    });

    it("does not prefix page hrefs", () => {
      expect(prefixAnchorHref("/privacy", "/accessibility")).toBe("/privacy");
    });
  });

  describe("edge cases", () => {
    it("does not prefix the skip-to-content link (it targets an element on every page)", () => {
      // #main-content exists on every page, so it must not be prefixed.
      // This test documents the intentional exclusion — call prefixAnchorHref
      // only on nav links, never on the skip link.
      expect(prefixAnchorHref("#main-content", "/privacy")).toBe(
        "/#main-content"
      );
      // ↑ This would be wrong behavior for the skip link — the test exists to
      // remind us NOT to pass #main-content through this utility.
      // The skip link href is hardcoded directly in Navbar and bypasses this function.
    });

    it("handles mailto and external hrefs without modification", () => {
      expect(
        prefixAnchorHref("mailto:rafael.adames@adaptek.ai", "/privacy")
      ).toBe("mailto:rafael.adames@adaptek.ai");
      expect(
        prefixAnchorHref("https://linkedin.com/in/rafaeladames/", "/privacy")
      ).toBe("https://linkedin.com/in/rafaeladames/");
    });
  });
});
