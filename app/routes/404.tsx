import styles from "~/styles/index.css";
import globalStyles from "~/styles/global.css";
import type { LinksFunction } from "remix";
import { Navbar } from "../navbar";
import { Footer } from "../footer";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: globalStyles },
  ];
};

export default function Index(props: any) {
  console.log(props);

  return (
    <>
      <Navbar />
      <main className="landing">
        <h1 className="header">404</h1>
        <h3 className="sub">Look's like I haven't gotten to this page yet.</h3>
      </main>
      <Footer />
    </>
  );
}
