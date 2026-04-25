import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { KelpMark } from "../KelpMark";

export function StacksLayout({
  title,
  effectiveDate,
  children,
}: {
  title: string;
  effectiveDate: string;
  children: ReactNode;
}) {
  const year = new Date().getFullYear();

  return (
    <main className="legal">
      <header>
        <Link className="brand" to="/">
          <KelpMark />
          <span>Kelp Software</span>
        </Link>
      </header>

      <article>
        <p className="legal-eyebrow">Stacks</p>
        <h1>{title}</h1>
        <p className="legal-date">Effective {effectiveDate}</p>
        {children}
      </article>

      <nav className="legal-footer-nav">
        <Link to="/stacks/privacy-policy">Privacy Policy</Link>
        <span aria-hidden>·</span>
        <Link to="/stacks/terms">Terms of Service</Link>
        <span aria-hidden>·</span>
        <a href="mailto:dev@kelpsoftware.com">Contact</a>
      </nav>

      <footer>
        <span>&copy; {year} Kelp Software</span>
      </footer>
    </main>
  );
}
