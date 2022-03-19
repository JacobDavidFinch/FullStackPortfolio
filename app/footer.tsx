import { useLocation } from "react-router-dom";

export function Footer() {
  const location = useLocation();

  const displayQuote = (() => {
    switch (location?.pathname) {
      case "/about":
        return "Order and simplification are the first steps toward the mastery of a subject.";
      case "/work":
        return "We are what we repeatedly do. Excellence is not an act, but a habit.";
      case "/":
        return "The future is now. It’s just not evenly distributed yet.";
      case "/languages":
        return "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.";
      case "/contact":
        return "On the Internet, nobody knows you're a dog.";
      default:
        return "The future is now. It’s just not evenly distributed yet.";
    }
  })();

  return (
    <footer className="footer">
      <div className="quote">{displayQuote}</div>
    </footer>
  );
}
