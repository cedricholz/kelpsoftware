import { Link } from "react-router-dom";
import { KelpLogo } from "../KelpLogo";

export function NotFound() {
  const year = new Date().getFullYear();

  return (
    <main>
      <header>
        <Link className="brand" to="/">
          <KelpLogo />
        </Link>
      </header>

      <section className="hero">
        <h1>Page not found</h1>
        <p>
          There's no page at this address. <Link to="/">Go to the home page</Link>.
        </p>
      </section>

      <footer>
        <span>&copy; {year} Kelp Software</span>
      </footer>
    </main>
  );
}
