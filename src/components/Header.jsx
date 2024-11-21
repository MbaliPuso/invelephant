import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section>
        <nav
          className="custom-navbar navbar navbar navbar-expand-md navbar-dark"
          arial-label="Furni navigation bar"
        >
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img
                src="images/Invelephant-logo_purple.png"
                alt="Invelephant logo"
                className="img-fluid logo"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsFurni"
              aria-controls="navbarsFurni"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarsFurni">
              <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <a className="nav-link" href="about.html">
                    About us
                  </a>
                </li>
                <li>
                  <Link className="nav-link" to="/events">
                    Events
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/events">
                    Rules
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/contact">
                    Contact us
                  </Link>
                </li>
              </ul>
              <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                <button className="get-quote-button">
                  Get A Quote
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Header;
