import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import heroImg from "../assets/images/post-img.jpg";
import seeding from "../assets/images/seeding.png";
import wheat from "../assets/images/wheat.png";
import truck from "../assets/images/truck.png";
import cow from "../assets/images/cow.png";
import fruit from "../assets/images/fruits.png";
import pepper from "../assets/images/pepper.png";

import c1 from "../assets/images/client-1.png";
import c2 from "../assets/images/client-2.png";
import c3 from "../assets/images/client-3.png";
import c4 from "../assets/images/client-5.png";
import c5 from "../assets/images/client-6.png";
import c6 from "../assets/images/client-7.png";
import "../styles/service.css"

function Service () {

  return (
    <>
      <div>
        <Header />

        <Hero title="Our Services" subtitle="Service" bgImage={heroImg} />

      {/* Section Second */}

{/* ===== SERVICE SECTION 2 ===== */}
<section className="service-sec-2">
  <div className="container">

    {/* heading */}
    <div className="row mb-4">
      <div className="col-lg-6 col-12">
        <div className="sec-4-txt-1 ps-2">
          <h2 className="service-title">
            Grown Up <b>Naturally</b>
          </h2>
          <p className="text-secondary">
            We specialise in intelligent & effective Search and believes in
            the power of partnerships to grow business.
          </p>
        </div>
      </div>
    </div>

    {/* services grid */}
    <div className="row service-grid">

      <div className="col-lg-4 col-sm-6 col-12">
        <div className="ser-box">
          <img src={seeding} alt="" />
          <h3>Natural Products</h3>
          <p className="text-secondary">
            There are many variations of passages of Lorem Ipsum available.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-sm-6 col-12">
        <div className="ser-box">
          <img src={wheat} alt="" />
          <h3>Natural Wheats</h3>
          <p className="text-secondary">
            There are many variations of passages of Lorem Ipsum available.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-sm-6 col-12">
        <div className="ser-box">
          <img src={cow} alt="" />
          <h3>Native Cattle</h3>
          <p className="text-secondary">
            There are many variations of passages of Lorem Ipsum available.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-sm-6 col-12">
        <div className="ser-box">
          <img src={truck} alt="" />
          <h3>Land Preparation</h3>
          <p className="text-secondary">
            There are many variations of passages of Lorem Ipsum available.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-sm-6 col-12">
        <div className="ser-box">
          <img src={fruit} alt="" />
          <h3>Fresh Fruits</h3>
          <p className="text-secondary">
            There are many variations of passages of Lorem Ipsum available.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-sm-6 col-12">
        <div className="ser-box">
          <img src={pepper} alt="" />
          <h3>Natural Vegetables</h3>
          <p className="text-secondary">
            There are many variations of passages of Lorem Ipsum available.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>


{/* ===== SERVICE COUNT SECTION ===== */}
<section className="service-count-section">
  <div className="container">
    <div className="service-count-wrapper">
      <div className="row g-4">

        {/* Count 1 */}
        <div className="col-lg-3 col-sm-6 col-12 text-center">
          <div className="service-count-box count-border">
            <h2 className="service-count-number">12001</h2>
            <p className="service-count-text">CULTIVATED YARDS</p>
          </div>
        </div>

        {/* Count 2 */}
        <div className="col-lg-3 col-sm-6 col-12 text-center">
          <div className="service-count-box count-border">
            <h2 className="service-count-number">1455</h2>
            <p className="service-count-text">HAPPY CUSTOMERS</p>
          </div>
        </div>

        {/* Count 3 */}
        <div className="col-lg-3 col-sm-6 col-12 text-center">
          <div className="service-count-box count-border">
            <h2 className="service-count-number">233</h2>
            <p className="service-count-text">COMPANY AWARDS</p>
          </div>
        </div>

        {/* Count 4 */}
        <div className="col-lg-3 col-sm-6 col-12 text-center">
          <div className="service-count-box">
            <h2 className="service-count-number">25</h2>
            <p className="service-count-text">YEARS OF EXPERIENCE</p>
          </div>
        </div>
      </div>

      {/* Background Wheat Image */}
      <div className="service-count-bg-image">
        <img src={wheat} alt="wheat" />
      </div>
    </div>
  </div>
</section>
{/* ===== COUNT SECTION END ===== */}
{/* ===== SERVICE PARTNERS SECTION ===== */}
<section className="service-partners-section">
  <div className="container">

    {/* Heading */}
    <div className="row">
      <div className="col-lg-6 col-12">
        <div className="service-partners-heading">
          <h2>Our <b>Partners</b></h2>
          <p>
            We specialise in intelligent & effective Search and believe in
            the power of partnerships to grow business.
          </p>
        </div>
      </div>
    </div>

    {/* Logos */}
    <div className="row service-partners-logos">

      <div className="col-lg-2 col-sm-4 col-6">
        <img src={c1} alt="client" />
      </div>

      <div className="col-lg-2 col-sm-4 col-6">
        <img src={c4} alt="client" />
      </div>

      <div className="col-lg-2 col-sm-4 col-6">
        <img src={c3} alt="client" />
      </div>

      <div className="col-lg-2 col-sm-4 col-6">
        <img src={c6} alt="client" />
      </div>

      <div className="col-lg-2 col-sm-4 col-6">
        <img src={c2} alt="client" />
      </div>

      <div className="col-lg-2 col-sm-4 col-6">
        <img src={c5} alt="client" />
      </div>

    </div>

  </div>
</section>

{/* ===== SERVICE SECTION 5 ===== */}
<section className="service-highlight-section">
  <div className="container-fluid px-0">
    <div className="row g-0 align-items-center">

      {/* LEFT IMAGE */}
      <div className="col-lg-6 col-12">
        <div className="service-highlight-img"></div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="col-lg-6 col-12">
        <div className="service-highlight-content">
          <h2 className="service-highlight-title">
            Precision <b>agriculture</b>
          </h2>

          <p className="text-secondary d-lg-block d-none">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled there are many variations.
          </p>

          <p className="text-secondary d-lg-block d-none">
            It is a long established fact that a reader will be distracted
            by the readable content.
          </p>

          {/* mobile text */}
          <p className="d-lg-none">
            On the other hand, we denounce with righteous indignation and dislike men who beguiled.
          </p>

          <p className="d-lg-none">
            It is a long established fact that a reader will be distracted by.
          </p>

          <button className="btn-main service-btn">
            LEARN MORE
          </button>
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

export default Service;