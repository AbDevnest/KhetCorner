import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import heroImg from "../assets/images/post-img.jpg";
import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import product3 from "../assets/images/product3.jpg";
import product4 from "../assets/images/product4.jpg";
import wheatImg from "../assets/images/wheat.svg";
import client1 from "../assets/images/client-1.png";
import client2 from "../assets/images/client-2.png";
import client3 from "../assets/images/client-3.png";
import client7 from "../assets/images/client-7.png";
import client5 from "../assets/images/client-5.png";
import client6 from "../assets/images/client-6.png";

import "../styles/product.css";
import useScrollFade from "../hooks/useScrollFade";

function Product() {
  useScrollFade();
  const productsData = [
    {
      title: "Wheats",
      desc1:
        "High-quality wheat cultivated with advanced farming techniques for better yield.",
      desc2:
        "Rich in nutrients and ideal for flour production and daily consumption.",
      img: product1,
    },
    {
      title: "Natural Fruits",
      desc1: "Fresh and organic fruits grown without harmful chemicals.",
      desc2: "Packed with vitamins and perfect for a healthy lifestyle.",
      img: product2,
    },
    {
      title: "Native Cattle",
      desc1:
        "Strong and healthy native breeds raised with natural feeding practices.",
      desc2: "Supports sustainable dairy and farming ecosystems.",
      img: product3,
    },
    {
      title: "Fresh Vegetables",
      desc1: "Farm-fresh vegetables harvested daily for maximum freshness.",
      desc2: "Free from pesticides and full of natural taste.",
      img: product4,
    },
  ];

  const partners = [client1, client2, client3, client7, client5, client6];

  return (
    <>
      <div>
        <Header />

        <Hero title="Our Products" subtitle="Product" bgImage={heroImg} />

        {/* <!--Section two start --> */}
        <section className="product-sec-two fade-up">
          <div className="container">
            {productsData.map((item, index) => (
              <div className="row align-items-center product-row" key={index}>
                {/* TEXT */}
                <div
                  className={`col-lg-6 col-12 ${index % 2 !== 0 ? "order-lg-2" : ""}`}
                >
                  <div className="product-content">
                    <h2 className="prod-txt-h">{item.title}</h2>

                    <p className="prod-txt-p">{item.desc1}</p>
                    <p className="prod-txt-p">{item.desc2}</p>

                    <button className="btn-main mt-3">Learn More</button>
                  </div>
                </div>

                {/* IMAGE */}
                <div
                  className={`col-lg-6 col-12 ${index % 2 !== 0 ? "order-lg-1" : ""}`}
                >
                  <div className="product-img-wrapper">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="img-product"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* <!-- section three start --> */}
        <section className="count-sec fade-up">
          <div className="container position-relative">
            <div className="row text-center">
              <div className="col-lg-3 col-sm-6 col-12 mb-4">
                <div className="count-card">
                  <h1 className="count-h-txt">12,001+</h1>
                  <p className="count-p-txt">Cultivated Yards</p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 col-12 mb-4">
                <div className="count-card">
                  <h1 className="count-h-txt">1,455+</h1>
                  <p className="count-p-txt">Happy Customers</p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 col-12 mb-4">
                <div className="count-card">
                  <h1 className="count-h-txt">233+</h1>
                  <p className="count-p-txt">Company Awards</p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 col-12 mb-4">
                <div className="count-card">
                  <h1 className="count-h-txt">25+</h1>
                  <p className="count-p-txt">Years Of Experience</p>
                </div>
              </div>
            </div>

            {/* floating image */}
            <div className="count-img">
              <img src={wheatImg} alt="wheat" />
            </div>
          </div>
        </section>
        {/* <!-- count section complete --> */}

        <section className="ser-sec-four fade-up">
          <div className="container">
            {/* heading */}
            <div className="row justify-content-center">
              <div className="col-lg-6 col-12 text-center">
                <div className="sec-4-txt-1">
                  <h2 className="sec-title">
                    Our <b>Partners</b>
                  </h2>
                  <p className="sec-subtitle">
                    We collaborate with trusted partners to deliver quality and
                    innovation in agriculture.
                  </p>
                </div>
              </div>
            </div>

            {/* logos */}
            <div className="row mt-5">
              {partners.map((logo, index) => (
                <div className="col-lg-2 col-md-4 col-6 mb-4" key={index}>
                  <div className="partner-card">
                    <img src={logo} alt="partner" />
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

export default Product;
