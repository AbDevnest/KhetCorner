import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import heroImg from "../assets/images/post-img.jpg";
import img from "../assets/images/img1.jpg";
import seeding from "../assets/images/seeding.png";
import wheat from "../assets/images/wheat.png";
import truck from "../assets/images/truck.png";
import cow from "../assets/images/cow.png";
import img1 from "../assets/images/farmer1.jpg";
import img2 from "../assets/images/farmer2.jpg";
import img3 from "../assets/images/farmer3.jpg";
import img4 from "../assets/images/farmer4.jpg";
import sign from "../assets/images/signature.png";
import img02 from "../assets/images/img2.jpg";
import img03 from "../assets/images/img3.jpg";

import c1 from "../assets/images/client-1.png";
import c2 from "../assets/images/client-2.png";
import c3 from "../assets/images/client-3.png";
import c4 from "../assets/images/client-5.png";
import c5 from "../assets/images/client-6.png";
import c6 from "../assets/images/client-7.png";
import "../styles/about.css";

function About() {

  return (
    <>
      <div>
        <Header />

        <Hero title="About Us" subtitle="About" bgImage={heroImg} />

        {/* ===== ABOUT SECTION 2 ===== */}
        <section className="about-sec-2">
          <div className="container">
            {/* TOP ROW */}
            <div className="row align-items-center">
              {/* LEFT */}
              <div className="col-lg-6 col-12">
                <p className="about-sec-2-subtitle">GROW NATURALLY</p>

                <h2 className="about-sec-2-title">Redefining Agri Living</h2>

                <p className="about-sec-2-desc">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour. Generators on the Internet tend to
                  repeat predefined chunks.
                </p>

                <button className="btn-main">LEARN MORE</button>
              </div>

              {/* RIGHT IMAGE */}
              <div className="col-lg-6 col-12 mt-lg-0 mt-4">
                <img src={img} alt="about" className="about-sec-2-img" />
              </div>
            </div>

            {/* BOTTOM FEATURES */}
            <div className="row about-sec-2-features">
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="about-sec-2-item">
                  <img src={seeding} alt="" />
                  <div>
                    <h4>Natural</h4>
                    <p>Looked up one of the more obscure Latin</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 col-12">
                <div className="about-sec-2-item">
                  <img src={wheat} alt="" />
                  <div>
                    <h4>Wheat</h4>
                    <p>Looked up one of the more obscure Latin</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 col-12">
                <div className="about-sec-2-item">
                  <img src={truck} alt="" />
                  <div>
                    <h4>Equipment</h4>
                    <p>Looked up one of the more obscure Latin</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 col-12">
                <div className="about-sec-2-item">
                  <img src={cow} alt="" />
                  <div>
                    <h4>Cattle</h4>
                    <p>Looked up one of the more obscure Latin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Section 3  --> */}
    <section className="team-section">
      <div className="container">

        {/* heading */}
        <div className="row mb-4">
          <div className="col-lg-6 col-12 team-heading">
            <h2>
              Our <b>Team</b>
            </h2>
            <p className="text-secondary">
              We specialise in intelligent & effective Search and believes
              in the power of partnerships to grow business.
            </p>
          </div>
        </div>

        {/* cards */}
        <div className="row">
          <div className="team-slider">

            {/* CARD 1 */}
            <div className="col-lg-4 col-12 team-col">
              <div className="team-card text-center position-relative">
                <figure className="team-figure">
                  <img src={img1} alt="" />
                </figure>

                <div className="team-icons">
                  <i className="fa-brands fa-linkedin-in"></i>
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-twitter"></i>
                </div>

                <div className="pt-3">
                  <h3>Bryan Smith</h3>
                  <p>Stoker</p>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="col-lg-4 col-12 team-col">
              <div className="team-card text-center position-relative">
                <figure className="team-figure">
                  <img src={img2} alt="" />
                </figure>

                <div className="team-icons">
                  <i className="fa-brands fa-linkedin-in"></i>
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-twitter"></i>
                </div>

                <div className="pt-3">
                  <h3>Sara Jones</h3>
                  <p>Food Production</p>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="col-lg-4 col-12 team-col">
              <div className="team-card text-center position-relative">
                <figure className="team-figure">
                  <img src={img3} alt="" />
                </figure>

                <div className="team-icons">
                  <i className="fa-brands fa-linkedin-in"></i>
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-twitter"></i>
                </div>

                <div className="pt-3">
                  <h3>Tim Douglas</h3>
                  <p>Laborer</p>
                </div>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="col-lg-4 col-12 team-col">
              <div className="team-card text-center position-relative">
                <figure className="team-figure">
                  <img src={img4}  alt="" />
                </figure>

                <div className="team-icons">
                  <i className="fa-brands fa-linkedin-in"></i>
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-twitter"></i>
                </div>

                <div className="pt-3">
                  <h3>Robert Thomson</h3>
                  <p>Warehouse</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
        {/* <!-- Section 4 start --> */}
<section className="about-sec-4">
      <div className="container">

        {/* WHY CHOOSE US */}
        <div className="row about-sec-4-top">

          {/* LEFT */}
          <div className="col-lg-4 col-12 mb-lg-0 mb-4">
            <h5 className="abt-h5">Why Choose Us</h5>

            <h2 className="about-sec-title">
              Experience the real agriculture
            </h2>

            <p className="abt-p-2 text-secondary">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>

            <img src={sign} className="about-sign" alt="" />
          </div>

          {/* MIDDLE */}
          <div className="col-lg-4 col-12 mb-lg-0 mb-4">
            <div className="about-card">
              <figure>
                <img src={img02} height="260px" alt="" />
              </figure>

              <h3>Our Mission</h3>
              <p className="text-secondary">
                It is a long established fact that a reader will be distracted.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-4 col-12">
            <div className="about-card">
              <figure>
                <img src={img03} height="260px" alt="" />
              </figure>

              <h3>Our Vision</h3>
              <p className="text-secondary">
                It is a long established fact that a reader will be distracted.
              </p>
            </div>
          </div>

        </div>

        {/* PARTNERS */}
        <div className="about-sec-4-bottom">

          <div className="row mb-4">
            <div className="col-lg-6 col-12 sec-4-txt-1">
              <h2>
                Our <b>Partners</b>
              </h2>
              <p className="text-secondary">
                We specialise in intelligent & effective Search and believes
                in the power of partnerships.
              </p>
            </div>
          </div>

          {/* LOGOS */}
          <div className="row align-items-center">

            <div className="col-lg-2 col-sm-4 col-6 client-logo">
              <img src={c1} alt="" />
            </div>

            <div className="col-lg-2 col-sm-4 col-6 client-logo">
              <img src={c4} alt="" />
            </div>

            <div className="col-lg-2 col-sm-4 col-6 client-logo">
              <img src={c3} alt="" />
            </div>

            <div className="col-lg-2 col-sm-4 col-6 client-logo">
              <img src={c6} alt="" />
            </div>

            <div className="col-lg-2 col-sm-4 col-6 client-logo">
              <img src={c2} alt="" />
            </div>

            <div className="col-lg-2 col-sm-4 col-6 client-logo">
              <img src={c5} alt="" />
            </div>

          </div>

        </div>

      </div>
    </section>
        <ContactForm />

        <Footer />
      </div>
    </>
  );
}

export default About;
