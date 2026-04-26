import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

import heroImg from "../assets/images/post-img.jpg";
import sideImg from "../assets/images/img5.jpg";
import logo from "../assets/images/logo-2.png";

import "../styles/comingsoon.css";
import useScrollFade from "../hooks/useScrollFade";


function ComingSoon() {
  useScrollFade();
  return (
    <>
      <Header />

      <Hero title="Coming Soon" subtitle="Coming Soon" bgImage={heroImg} />

      {/* SECTION */}
      <section className="coming-sec fade-up">
        <div className="container-fluid p-0">
          <div className="row g-0">
            {/* LEFT IMAGE */}
            <div className="col-lg-6 d-none d-lg-block">
              <div
                className="coming-img"
                style={{ backgroundImage: `url(${sideImg})` }}
              ></div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-lg-6 col-12">
              <div className="coming-content">
                <div className="coming-box">
                  <img src={logo} alt="logo" className="coming-logo" />

                  <h2 className="coming-title">Coming Soon...</h2>

                  <p className="coming-subtitle">
                    SUBSCRIBE TO BE NOTIFIED WHEN WE GO LIVE!
                  </p>

                  <input
                    type="email"
                    placeholder="Your email address"
                    className="coming-input"
                  />

                  <button className="btn-main coming-btn">SUBSCRIBE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </>
  );
}

export default ComingSoon;
