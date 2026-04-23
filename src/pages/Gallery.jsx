import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import heroImg from "../assets/images/post-img.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

import g1 from "../assets/images/gallery-1.jpg";
import g2 from "../assets/images/gallery2.jpg";
import g3 from "../assets/images/gallery3.jpg";
import g4 from "../assets/images/gallery4.jpg";
import g5 from "../assets/images/gallery5.jpg";
import g6 from "../assets/images/gallery6.jpg";

import "../styles/gallery.css";

function Gallery () {
  const [active, setActive] = useState("All");

  const data = [
    { img: g1, category: "Farm", text: "Farm Gallery" },
    { img: g2, category: "Organic", text: "Organic Gallery" },
    { img: g3, category: "Fruits", text: "Fruits Gallery" },
    { img: g4, category: "Farm", text: "Farm Gallery" },
    { img: g5, category: "Organic", text: "Organic Gallery" },
    { img: g6, category: "Fruits", text: "Fruits Gallery" },
  ];

  const filtered =
    active === "All" ? data : data.filter((item) => item.category === active);

  return (
    <>
      <div>
        <Header />

        <Hero title="Our Gallery" subtitle="Gallery" bgImage={heroImg} />
 <section className="gallary-sec-two">
      <div className="container">

        {/* TITLE */}
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="sec-4-txt-1 ps-3">
              <h2>Our <b>Gallery</b></h2>
              <p className="text-secondary">
                We specialise in intelligent & effective Search and believes in the power of partnerships.
              </p>
            </div>
          </div>
        </div>

        {/* FILTER */}
        <div className="cd-inner">
          <ul className="cd-ul">
            {["All","Farm","Organic","Fruits"].map((cat) => (
              <li key={cat} className="cd-li">
                <button
                  className={active === cat ? "active" : ""}
                  onClick={() => setActive(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* IMAGES */}
        <div className="row mt-4">
          {filtered.map((item, i) => (
            <div className="col-sm-6 col-12 mb-4" key={i}>
              <div className="cd-imag animate-slide">
                <img src={item.img} alt="" />

                <div className="black-line"></div>
                <div className="black-overlay"></div>
                <div className="overlay-box box-left"></div>
                <div className="overlay-box box-right"></div>

                <div className="text-overlay">{item.text}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
        <ContactForm />

        <Footer />
      </div>
    </>
  );
}

export default Gallery;