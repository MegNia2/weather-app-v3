import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="London" />
        <footer>
          Coded by Megan Gee, and is open-sourced on{" "}
          <a
            href="https://github.com/MegNia2/weather-app-v3"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          hosted on{" "}
          <a
            href="https://statuesque-faun-890912.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
