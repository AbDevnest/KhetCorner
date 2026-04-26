import React from "react";
import { Link } from "react-router-dom";
import "../styles/hero.css";
import "../styles/animation.css";
import useScrollFade from "../hooks/useScrollFade";


function Hero({ title, subtitle, bgImage }) {
  useScrollFade();
  return (
    <section
      className="inner-hero fade-up"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="inner-hero-overlay"></div>

      <div className="container">
        <div className="inner-hero-content">
          <h1 className="inner-hero-title">{title}</h1>

          {subtitle && (
            <ul className="inner-hero-breadcrumb">
              <li>
                <Link className="inner-hero-link" to="/home">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  className="inner-hero-link"
                  to={`/${subtitle.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {subtitle}
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
