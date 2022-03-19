import type { LinksFunction } from "remix";
import globalStyles from "~/styles/global.css";
import styles from "~/styles/about.css";
import about_pic from "../assets/jake_greyscale.jpg";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: globalStyles },
  ];
};

export default function About() {
  return (
    <main className="card">
      <div className="card__contents">
        <img src={about_pic} alt="Jacob Finch" />
        <div className="about-blurb">
          <h3>Profile.</h3>
          Developer utilizing todays top technologies to create clean functional
          code by deadline. Employing well regarded design patterns to
          distribute syntax that is not just usable, but readable in large team
          dynamics. <br />
          <br />
          <br />
          <h3>Education.</h3>
          <ul>
            <li>B.A. in Advertising from Cal State Fullerton </li>
            <li>Certificate in Software Engineering from UC Davis </li>
          </ul>
        </div>
        <div id="card__about--personal-about">
          <h3>Personal Life.</h3>
          <ul>
            <li>Born and raised in the beautiful Windsor, CA.</li>
            <li>
              As a kid I wanted to be a Dragon Ball Z fighter when I grew up.
            </li>
            <li>Enjoyed hiking, camping, and anything sports growing up.</li>
            <li>
              I worked for a michelin star restaurant where I learned there’s
              more to life than pizza and hamburgers.{" "}
            </li>
            <li>
              Board games and puzzles sound like a great time on a Friday night.
            </li>
            <li>
              Family is the most important thing to me. I'm a proud Father to
              the best child there is (Biased).
            </li>
            <li>I love to learn new things and take on big challenges.</li>
          </ul>
        </div>
      </div>
      <section>
        <h3>Languages.</h3>
        <div className="languages__section">
          <div className="languages__list">
            <div className="language-title">
              <strong>Front-End.</strong>
            </div>
            <div>
              <i className="devicon-javascript-plain"></i> Javascript/TypeScript
            </div>
            <div>
              <i className="devicon-react-plain"></i> React/NextJs
            </div>
            <div>
              <i className="devicon-native-plain"></i> Redux/React-Query
            </div>
            <div>
              <i className="devicon-native-plain"></i> React Native
            </div>
            <div>
              <i className="devicon-html5-plain"></i> HTML5
            </div>
            <div>
              <i className="devicon-css3-plain"></i> CSS3/SASS
            </div>
          </div>
          <div className="languages__list">
            <div className="language-title">
              <strong>Back-End.</strong>
            </div>
            <div>
              <i className="devicon-nodejs-plain"></i> NodeJs
            </div>
            <div>
              <i className="devicon-express-original"></i> Express
            </div>
            <div>
              <i className="devicon-express-original"></i> Fastify
            </div>
            <div>
              <i className="devicon-express-original"></i> GraphQL/Apollo
            </div>
            <div>
              <i className="devicon-csharp-plain"></i>Rust
            </div>
          </div>
          <div className="languages__list">
            <div className="language-title">
              <strong>Databases.</strong>
            </div>
            <div>
              <i className="devicon-mysql-plain"></i> SQL
            </div>
            <div>
              <i className="devicon-mysql-plain"></i> SQL Server/MySQL
            </div>
            <div>
              <i className="devicon-mongodb-plain"></i> MongoDb
            </div>
          </div>
          <div className="languages__list">
            <div className="language-title">
              <strong>Devops.</strong>
            </div>
            <div>
              <i className="devicon-travis-plain"></i>CI/CD
            </div>
            <div>
              <i className="devicon-amazonwebservices-plain"></i> AWS
            </div>
            <div>
              <i className="devicon-docker-plain"></i> Docker/Kubernetes
            </div>
          </div>
          <div className="language__list">
            <div className="title">
              <strong>Best Practices.</strong>
            </div>
            <div>
              <i className="devicon-git-plain"></i> Git/Github
            </div>
            <div>
              <i className="devicon-mocha-plain"></i> Unit/Integration/E2E Tests
            </div>
            <div>
              <i className="devicon-agile-plain"></i> Agile Methodology
            </div>
            <div> UX/UI Design</div>
            <div> CS Principles</div>
            <div> Migrations/Versioning</div>
            <div> SEO/SEM</div>
          </div>
        </div>
      </section>
    </main>
  );
}
