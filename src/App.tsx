import { useEffect, useState } from "react";
import Homepage from "./Components/Homepage";
import "./style/output.css";
import Footer from "./Components/Footer";
import BackgroundCards from "./Components/Background";

function Header({ light, setLight }) {
  return (
    <header className="h-fit flex justify-end">
      <button
        className="w-12 h-12 text-2xl hover:bg-main-light rounded-full"
        onClick={() => {
          setLight(!light);
        }}
      >
        {light ? (
          <i className="fa-solid fa-sun"></i>
        ) : (
          <i className="fa-solid fa-moon"></i>
        )}
      </button>
      <div className="m-2 flex">
        <a href="https://github.com/phan-forsure" className="block w-fit mx-2">
          <img
            className="w-8 h-8 rounded-xl opacity-50 hover:opacity-85 transition-all cursor-pointer"
            src="githubicon-removebg-preview.png"
            alt="github"
          />
        </a>
        <a href="https://codepen.io/phan-forsure" className="block w-fit mx-2">
          <img
            className="w-8 h-8 rounded-xl opacity-50 hover:opacity-85 transition-all cursor-pointer"
            src="codepen1600.png"
            alt="codepen"
          />
        </a>
      </div>
    </header>
  );
}

function App() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    if (light) {
      document.body.classList.add("light");
    } else if (!light) {
      document.body.classList.remove("light");
    }
  }, [light]);

  useEffect(() => {
    const app = document.querySelector(".app");

    setTimeout(() => {
      app.classList.add("fade");
    }, 200);
  }, []);

  return (
    <div className="app opacity-0">
      <BackgroundCards id={1} />
      <BackgroundCards id={2} />
      <div className="container-all mx-16 mt-16">
        <Header light={light} setLight={setLight} />
        <Homepage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
