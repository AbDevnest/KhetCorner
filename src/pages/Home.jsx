import Header from "../components/Header";
import React, { useState } from "react";
import "../styles/home.css";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import logo1 from "../assets/images/client-1.png";
import logo2 from "../assets/images/client-2.png";
import logo3 from "../assets/images/client-3.png";
import logo7 from "../assets/images/client-7.png";
import logo5 from "../assets/images/client-5.png";
import logo6 from "../assets/images/client-6.png";
import seeding from "../assets/images/seeding.png";
import wheat from "../assets/images/wheat.png";
import truck from "../assets/images/truck.png";
import cow from "../assets/images/cow.png";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";


function Home() {

 
  const yearData = [
    {
      year: "1992",
      title: "Foundation of KhetCorner",
      description:
        "KhetCorner was established with a vision to support local farmers through traditional farming practices, starting with a small family-owned farmland and a commitment to quality produce.",
    },
    {
      year: "1995",
      title: "Market Expansion",
      description:
        "The company expanded its reach to nearby cities, building strong relationships with local markets and ensuring fresh farm produce was accessible to a larger community.",
    },
    {
      year: "2005",
      title: "Sustainable Farming Practices",
      description:
        "KhetCorner adopted eco-friendly and sustainable farming methods, focusing on soil health, water conservation, and reducing chemical usage to protect the environment.",
    },
    {
      year: "2015",
      title: "Agri-Tech Integration",
      description:
        "Modern agricultural technologies were introduced, including advanced irrigation systems and data-driven crop management, significantly improving productivity and efficiency.",
    },
    {
      year: "2025",
      title: "Future-Ready Agriculture",
      description:
        "KhetCorner is evolving into a smart agri-platform, combining innovation, sustainability, and farmer empowerment to lead the future of agriculture in India.",
    },
  ];

  const Section4 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [contentVisible, setContentVisible] = useState(true);

    const updateTimeline = (index) => {
      setContentVisible(false);
      setTimeout(() => {
        setCurrentIndex(index);
        setContentVisible(true);
      }, 300);
    };

    return (
      <>
        <div>
          <Header />

          {/* Main Carousel Wrapper */}
          <section className="hero-section fade-up">
            <div
              id="heroCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="2000"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#heroCarousel"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#heroCarousel"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#heroCarousel"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>

              <div className="carousel-inner">
                {/* Slide 1 */}
                <div className="carousel-item active hero-slide slide-1">
                  <div className="hero-overlay"></div>
                  <div className="container">
                    <div className="hero-content">
                      <h5>Fresh & Organic</h5>
                      <h1>Healthy Food For You</h1>
                      <p>
                        Direct from farms to your home with 100% natural
                        quality.
                      </p>
                      <button className="btn-main">Shop Now</button>
                    </div>
                  </div>
                </div>

                {/* Slide 2 */}
                <div className="carousel-item hero-slide slide-2">
                  <div className="hero-overlay"></div>
                  <div className="container">
                    <div className="hero-content">
                      <h5>Support Farmers</h5>
                      <h1>Empowering Agriculture</h1>
                      <p>Connecting farmers directly with customers.</p>
                      <button className="btn-main">Explore</button>
                    </div>
                  </div>
                </div>

                {/* Slide 3 */}
                <div className="carousel-item hero-slide slide-3">
                  <div className="hero-overlay"></div>
                  <div className="container">
                    <div className="hero-content">
                      <h5>Pure & Natural</h5>
                      <h1>No Chemicals, Only Quality</h1>
                      <p>Experience the freshness of real organic products.</p>
                      <button className="btn-main">Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About section */}
          <section className="about-section fade-up">
            <div className="container">
              <div className="row align-items-center">
                {/* Left Content */}
                <div className="col-lg-6 col-12 mb-4 mb-lg-0">
                  <div className="about-left">
                    <span className="about-tag">GROW NATURALLY</span>
                    <h2 className="about-title">Leaders In The Field</h2>

                    <p className="about-desc">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.
                    </p>

                    <button className="btn-main">LEARN MORE</button>
                  </div>
                </div>

                {/* Right Content */}
                <div className="col-lg-6 col-12">
                  <div className="row g-4">
                    <div className="col-md-6 col-12">
                      <div className="feature-box">
                        <img src={seeding} alt="icon" />
                        <h5>Natural Products</h5>
                        <p>Many desktop publishing packages and web page.</p>
                      </div>
                    </div>

                    <div className="col-md-6 col-12">
                      <div className="feature-box">
                        <img src={cow} alt="icon" />
                        <h5>Cattle</h5>
                        <p>Many desktop publishing packages and web page.</p>
                      </div>
                    </div>

                    <div className="col-md-6 col-12">
                      <div className="feature-box">
                        <img src={wheat} alt="icon" />
                        <h5>Wheat Cultivation</h5>
                        <p>Many desktop publishing packages and web page.</p>
                      </div>
                    </div>

                    <div className="col-md-6 col-12">
                      <div className="feature-box">
                        <img src={truck} alt="icon" />
                        <h5>Modern Truck</h5>
                        <p>Many desktop publishing packages and web page.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="process-section fade-up">
            <div className="container">
              {/* Top Steps */}
              <div className="row text-center process-steps">
                <div className="col-lg-4 col-12 mb-4">
                  <h3 className="step-number">01</h3>
                  <h5 className="fw-bold">CROP SELECTION</h5>
                  <p className="text-secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable.
                  </p>
                </div>

                <div className="col-lg-4 col-12 mb-4">
                  <h3 className="step-number">02</h3>
                  <h5 className="fw-bold">LAND PREPARATION</h5>
                  <p className="text-secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable.
                  </p>
                </div>

                <div className="col-lg-4 col-12 mb-4">
                  <h3 className="step-number">03</h3>
                  <h5 className="fw-bold">SEED SELECTION</h5>
                  <p className="text-secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable.
                  </p>
                </div>
              </div>

              {/* Cards */}
              <div className="row g-4 process-cards">
                <div className="col-lg-4 col-12">
                  <div className="process-card text-center">
                    <img src={img6} height="350px" alt="img" />
                    <h5 className="fw-bold mt-3">Nutrition Wheat</h5>
                    <p className="text-secondary">
                      Getting the most effective keywords
                    </p>
                    <button className="btn-main mt-3">READ MORE</button>
                  </div>
                </div>

                <div className="col-lg-4 col-12">
                  <div className="process-card text-center">
                    <img src={img7} height="350px" alt="img" />
                    <h5 className="fw-bold mt-3">High Technology</h5>
                    <p className="text-secondary">
                      Getting the most effective keywords
                    </p>
                    <button className="btn-main mt-3">READ MORE</button>
                  </div>
                </div>

                <div className="col-lg-4 col-12">
                  <div className="process-card text-center">
                    <img src={img8} height="350px" alt="img" />
                    <h5 className="fw-bold mt-3">Quality Products</h5>
                    <p className="text-secondary">
                      Getting the most effective keywords
                    </p>
                    <button className="btn-main mt-3">READ MORE</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Timeline */}
          <section className="history-section fade-up">
            <div className="history-bg"></div>

            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-12 history-header">
                  <h2>
                    Our <b>History</b>
                  </h2>
                  <p>
                    We specialise in intelligent & effective Search and believe
                    in the power of partnerships to grow business.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="timeline-wrapper">
                {/* Line */}
                <div className="timeline-line"></div>
                <div
                  className="timeline-progress"
                  style={{
                    width: `${((currentIndex + 0.5) / 5) * 100}%`,
                  }}
                ></div>

                {/* Years */}
                {yearData.map((item, index) => (
                  <div
                    key={index}
                    className={`timeline-item ${currentIndex === index ? "active" : ""}`}
                    onClick={() => updateTimeline(index)}
                  >
                    <span className="year pb-4">{item.year}</span>
                    <div className="dot"></div>
                  </div>
                ))}

                {/* Arrows */}
                <div className="timeline-nav">
                  <span
                    onClick={() =>
                      currentIndex > 0 && updateTimeline(currentIndex - 1)
                    }
                  >
                    ❮
                  </span>
                  <span
                    onClick={() =>
                      currentIndex < 4 && updateTimeline(currentIndex + 1)
                    }
                  >
                    ❯
                  </span>
                </div>
              </div>

              {/* Content */}
              <div
                className={`timeline-content ${contentVisible ? "show" : "hide"}`}
              >
                <h3>{yearData[currentIndex].title}</h3>
                <p>{yearData[currentIndex].description}</p>
              </div>
            </div>

            <div className="container mt-5">
              <div className="row text-center">
                <div className="col-lg-2 col-sm-4 col-6 py-3">
                  <img src={logo1} height="100px" alt="" />
                </div>

                <div className="col-lg-2 col-sm-4 col-6 py-3">
                  <img src={logo2} width="100%" alt="" />
                </div>

                <div className="col-lg-2 col-sm-4 col-6 py-3">
                  <img src={logo3} width="100%" alt="" />
                </div>

                <div className="col-lg-2 col-sm-4 col-6 py-3">
                  <img src={logo5} width="100%" alt="" />
                </div>

                <div className="col-lg-2 col-sm-4 col-6 py-3">
                  <img src={logo6} width="100%" alt="" />
                </div>

                <div className="col-lg-2 col-sm-4 col-6 py-3">
                  <img src={logo7} width="100%" alt="" />
                </div>
              </div>
            </div>
          </section>

          <ContactForm />

          <Footer />
        </div>
      </>
    );
  };

  return <Section4 />;
}
export default Home;
