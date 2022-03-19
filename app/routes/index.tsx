import type { LinksFunction } from "remix";
import styles from "~/styles/index.css";
import globalStyles from "~/styles/global.css";
import { Navbar } from "../navbar";
import { Footer } from "../footer";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: globalStyles },
  ];
};

export default function Index() {
  return (
    <main className="landing">
      <h1 className="header">My NAMES JAKE AND I'M A FULL-STACK DEVELOPER</h1>
      <h3 className="sub">Let's build something new.</h3>
    </main>
  );
}
