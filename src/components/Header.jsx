import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Outside click close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={`main-header ${scrolled ? "scrolled" : ""}`}>
      <nav
        className={`navbar sticky-top navbar-expand-lg ${
          scrolled ? "navbar-scrolled" : ""
        } py-3`}
      >
        <div className="container p-lg-0">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            KhetCorner
          </Link>

          {/* Toggle Button */}
          <button
            ref={toggleRef}
            className="navbar-toggler"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>

          {/* Nav Links */}
          <div
            ref={menuRef}
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/home"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/service"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/blog"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
              </li>

              {/* Pages Dropdown */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle btn btn-link"
                  id="navbarDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </button>

                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/gallery"
                      onClick={() => setIsOpen(false)}
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/product"
                      onClick={() => setIsOpen(false)}
                    >
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/faq"
                      onClick={() => setIsOpen(false)}
                    >
                      Faq
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/comingsoon"
                      onClick={() => setIsOpen(false)}
                    >
                      Coming Soon
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/error"
                      onClick={() => setIsOpen(false)}
                    >
                      Error Page
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
