import { render, screen } from "@testing-library/react";
import { Navbar } from "@/components/layout/Navbar";

/**
 * Navbar cross-page link routing tests.
 *
 * Regression: anchor nav links (#services, #contact, etc.) rendered as-is on
 * sub-pages (/privacy, /accessibility) did nothing — those sections don't
 * exist outside the home page. The fix uses usePathname() to prefix them with
 * "/" when not on "/".
 */

// Mock next/navigation so we can control pathname in each test
const mockUsePathname = jest.fn<string, []>();
jest.mock("next/navigation", () => ({
  usePathname: () => mockUsePathname(),
}));

// nav.links from en.ts — the four anchor links we care about
const ANCHOR_LINK_LABELS = ["Services", "Who We Serve", "About Us", "Contact"];

describe("Navbar — nav link hrefs", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("on the home page (/)", () => {
    it("renders anchor nav links unchanged so in-page scroll works", () => {
      mockUsePathname.mockReturnValue("/");
      render(<Navbar />);

      // Desktop nav has one set; mobile menu (hidden via CSS but in DOM) has another.
      // We check that every rendered instance uses the bare anchor.
      const servicesLinks = screen.getAllByRole("link", { name: "Services" });
      servicesLinks.forEach((link) =>
        expect(link).toHaveAttribute("href", "#services")
      );

      const contactLinks = screen.getAllByRole("link", { name: "Contact" });
      contactLinks.forEach((link) =>
        expect(link).toHaveAttribute("href", "#contact")
      );
    });

    it("keeps the Book a consult CTA pointing to the intent URL", () => {
      mockUsePathname.mockReturnValue("/");
      render(<Navbar />);

      const ctaLinks = screen.getAllByRole("link", { name: /book a consult/i });
      ctaLinks.forEach((link) =>
        expect(link).toHaveAttribute("href", "/?intent=consult#contact")
      );
    });
  });

  describe("on /privacy", () => {
    it("prefixes every anchor nav link with / so clicking navigates home first", () => {
      mockUsePathname.mockReturnValue("/privacy");
      render(<Navbar />);

      for (const label of ANCHOR_LINK_LABELS) {
        const links = screen.getAllByRole("link", { name: label });
        links.forEach((link) => {
          const href = link.getAttribute("href") ?? "";
          expect(href).toMatch(/^\//);
          expect(href).not.toBe(
            // Must not be the bare anchor version
            href.startsWith("/#") ? "" : href
          );
          // More directly: every anchor-section link starts with /#
          if (["Services", "Who We Serve", "About Us", "Contact"].includes(label)) {
            expect(href.startsWith("/#")).toBe(true);
          }
        });
      }
    });

    it("does not double-prefix the Book a consult CTA", () => {
      mockUsePathname.mockReturnValue("/privacy");
      render(<Navbar />);

      const ctaLinks = screen.getAllByRole("link", { name: /book a consult/i });
      ctaLinks.forEach((link) =>
        expect(link).toHaveAttribute("href", "/?intent=consult#contact")
      );
    });

    it("leaves the home logo link pointing to /", () => {
      mockUsePathname.mockReturnValue("/privacy");
      render(<Navbar />);

      const logoLink = screen.getByRole("link", { name: /adaptek.*home/i });
      expect(logoLink).toHaveAttribute("href", "/");
    });
  });

  describe("on /accessibility", () => {
    it("prefixes anchor nav links with /", () => {
      mockUsePathname.mockReturnValue("/accessibility");
      render(<Navbar />);

      const servicesLinks = screen.getAllByRole("link", { name: "Services" });
      servicesLinks.forEach((link) =>
        expect(link).toHaveAttribute("href", "/#services")
      );

      const foundersLinks = screen.getAllByRole("link", { name: "About Us" });
      foundersLinks.forEach((link) =>
        expect(link).toHaveAttribute("href", "/#founders")
      );
    });
  });
});
