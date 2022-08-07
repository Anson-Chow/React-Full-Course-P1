import React from "react";
import ReactDOM from "react-dom/client";
import reactLogo from "./react-logo.png"

export default function Header() {
    return(
      <header>
      <nav className="nav__bar">
        <div className="nav__bar--left">
        <img className="nav__logo" src={/*require("./react-logo.png")*/reactLogo} alt="" />
        <h1>ReactFacts</h1>
        </div>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
    )
  }