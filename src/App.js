import logo from "./logo.svg";
import "./App.css";
import { Link, NavLink } from "react-router-dom";
// import router from "./router";

import Banner from "./Banner";
import Services from "./Services";
import Portfolio from "./Portfolio";
import About from "./About";

function App() {
  return (
    <div className="App">
      {/* <header>
        <Link>
          <img className="headerLogo" />
        </Link>
        <nav>
          <ul>
            <NavLink>Services</NavLink>
            <NavLink>Portfolio</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Team</NavLink>
            <NavLink>Contact</NavLink>
          </ul>
        </nav>
      </header> */}
      <main>
        <section id="page-top">
          <Banner />
        </section>
        <section id="services">
          <Services />
        </section>
        <section className="portfolio">
          <Portfolio />
        </section>
        <section className="About">
          <About />
        </section>
      </main>
    </div>
  );
}

export default App;
