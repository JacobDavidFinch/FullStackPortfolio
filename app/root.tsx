import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  LinksFunction,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import video from "./assets/Golden_Gate_Traffic.mp4";
import video_image from "./assets/Golden_Gate_Traffic.jpg";
import globalStyles from "~/styles/global.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Intro to Jake Finch",
  viewport: "width=device-width,initial-scale=1",
});
export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStyles },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Rock+Salt",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,900",
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src={video} type="video/mp4" />
            <source src={video_image} type="video/webm" />
            Your browser is not supported!
          </video>
        </div>
        <div className="bg-video-reversed">
          <video className="bg-video__content" autoPlay muted loop>
            <source src={video} type="video/mp4" />
            <source src={video_image} type="video/webm" />
            Your browser is not supported!
          </video>
        </div>
        <div className="background-box" />
        <Navbar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Footer />
      </body>
    </html>
  );
}
