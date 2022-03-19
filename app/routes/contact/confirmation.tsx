import type { LinksFunction } from "remix";
import styles from "~/styles/confirmation.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function confirmation() {
  return (
    <main className="card confirmation">
      <h2 className="confirmation__header">
        Thank you for reaching out. Expect a follow-up from me within 1 business
        day.
      </h2>
      <h4 className="confirmation__body">
        Until then, please take the time to visit my LinkedIn and Github
        Profiles to get a better idea of my previous experience and projects.
      </h4>
    </main>
  );
}
