import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { KelpLogo } from "../KelpLogo";

export type LegalLink = { to: string; label: string };

export const STACKS_LINKS: LegalLink[] = [
  { to: "/stacks/privacy-policy", label: "Privacy Policy" },
  { to: "/stacks/terms", label: "Terms of Service" },
  { to: "mailto:dev@kelpsoftware.com", label: "Contact" },
];

export const TIDEMARK_LINKS: LegalLink[] = [
  { to: "/tidemark/privacy", label: "Privacy Policy" },
  { to: "/tidemark/support", label: "Support" },
  { to: "mailto:support@kelpsoftware.com", label: "Contact" },
];

export function AppLegalLayout({
  product,
  icon,
  links,
  title,
  effectiveDate,
  children,
}: {
  product: string;
  icon?: string;
  links: LegalLink[];
  title: string;
  effectiveDate?: string;
  children: ReactNode;
}) {
  const year = new Date().getFullYear();

  return (
    <main className="legal">
      <header>
        <Link className="brand" to="/">
          <KelpLogo />
        </Link>
      </header>

      <article>
        {icon ? (
          <div className="legal-product">
            <img src={icon} alt="" width="56" height="56" />
            <p className="legal-eyebrow">{product}</p>
          </div>
        ) : (
          <p className="legal-eyebrow">{product}</p>
        )}
        <h1>{title}</h1>
        {effectiveDate && (
          <p className="legal-date">Effective {effectiveDate}</p>
        )}
        {children}
      </article>

      <nav className="legal-footer-nav">
        {links.map((link, i) => (
          <span key={link.to} className="legal-footer-item">
            {i > 0 && <span aria-hidden>·</span>}
            {link.to.startsWith("mailto:") ? (
              <a href={link.to}>{link.label}</a>
            ) : (
              <Link to={link.to}>{link.label}</Link>
            )}
          </span>
        ))}
      </nav>

      <footer>
        <span>&copy; {year} Kelp Software</span>
      </footer>
    </main>
  );
}
