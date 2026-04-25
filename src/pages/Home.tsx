import { Link } from "react-router-dom";
import { KelpMark } from "../KelpMark";

export function Home() {
  const year = new Date().getFullYear();

  return (
    <main>
      <header>
        <Link className="brand" to="/">
          <KelpMark />
          <span>Kelp Software</span>
        </Link>
      </header>

      <section className="hero">
        <h1>We build small, useful software.</h1>
        <p>
          Kelp Software is an independent studio shipping focused tools and
          experiments. Calm, dependable, low-overhead.
        </p>
      </section>

      <section className="meta">
        <div>
          <h2>Contact</h2>
          <p>
            <a href="mailto:dev@kelpsoftware.com">dev@kelpsoftware.com</a>
          </p>
        </div>
        <div>
          <h2>Status</h2>
          <p>Quietly building. New work coming soon.</p>
        </div>
      </section>

      <footer>
        <span>&copy; {year} Kelp Software</span>
      </footer>
    </main>
  );
}
