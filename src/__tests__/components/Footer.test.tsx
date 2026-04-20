import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/layout/Footer";

/**
 * Footer cross-page link routing tests.
 *
 * Same regression as Navbar: footer anchor links (#services, etc.) don't
 * work on /privacy or /accessibility. The fix applies prefixAnchorHref to
 * every link in the footer nav.
 */

const mockUsePathname = jest.fn<string, []>();
jest.mock("next/navigation", () => ({
  usePathname: () => mockUsePathname(),
}));

// footer.links that are anchor-only hrefs (the four section links)
const ANCHOR_FOOTER_LINKS = [
  { label: "Services", expected: { home: "#services", sub: "/#services" } },
  { label: "Who We Serve", expected: { home: "#who-we-serve", sub: "/#who-we-serve" } },
  { label: "About Us", expected: { home: "#founders", sub: "/#founders" } },
  { label: "Contact", expected: { home: "#contact", sub: "/#contact" } },
];

// footer.links that are full page paths (should never be modified)
const PAGE_FOOTER_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Accessibility Statement", href: "/accessibility" },
];

describe("Footer — nav link hrefs", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("on the home page (/)", () => {
    it("renders anchor links as bare anchors (in-page scroll)", () => {
      mockUsePathname.mockReturnValue("/");
      render(<Footer />);

      for (const { label, expected } of ANCHOR_FOOTER_LINKS) {
        const link = screen.getByRole("link", { name: label });
        expect(link).toHaveAttribute("href", expected.home);
      }
    });

    it("renders page links unchanged", () => {
      mockUsePathname.mockReturnValue("/");
      render(<Footer />);

      for (const { label, href } of PAGE_FOOTER_LINKS) {
        const link = screen.getByRole("link", { name: label });
        expect(link).toHaveAttribute("href", href);
      }
    });
  });

  describe("on /privacy", () => {
    it("prefixes anchor links with / so they navigate home before scrolling", () => {
      mockUsePathname.mockReturnValue("/privacy");
      render(<Footer />);

      for (const { label, expected } of ANCHOR_FOOTER_LINKS) {
        const link = screen.getByRole("link", { name: label });
        expect(link).toHaveAttribute("href", expected.sub);
      }
    });

    it("does not modify page-path links", () => {
      mockUsePathname.mockReturnValue("/privacy");
      render(<Footer />);

      for (const { label, href } of PAGE_FOOTER_LINKS) {
        const link = screen.getByRole("link", { name: label });
        expect(link).toHaveAttribute("href", href);
      }
    });
  });

  describe("on /accessibility", () => {
    it("prefixes anchor links with /", () => {
      mockUsePathname.mockReturnValue("/accessibility");
      render(<Footer />);

      for (const { label, expected } of ANCHOR_FOOTER_LINKS) {
        const link = screen.getByRole("link", { name: label });
        expect(link).toHaveAttribute("href", expected.sub);
      }
    });

    it("does not modify page-path links", () => {
      mockUsePathname.mockReturnValue("/accessibility");
      render(<Footer />);

      for (const { label, href } of PAGE_FOOTER_LINKS) {
        const link = screen.getByRole("link", { name: label });
        expect(link).toHaveAttribute("href", href);
      }
    });
  });
});
