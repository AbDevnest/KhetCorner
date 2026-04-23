import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import heroImg from "../assets/images/post-img.jpg";
import "../styles/faq.css"

function faq () {
const faqData = [
  {
    id: 1,
    question: "How can I contact your team?",
    answer:
      "You can reach us via contact form, email, or phone. Our support team responds within 24 hours."
  },
  {
    id: 2,
    question: "Do you provide organic farming solutions?",
    answer:
      "Yes, we specialize in organic and sustainable farming including soil and crop management."
  },
  {
    id: 3,
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, bank transfer, and all major online payment methods."
  },
  {
    id: 4,
    question: "Do you offer consultation for beginners?",
    answer:
      "Yes, we guide new farmers from planning to harvesting."
  },
  {
    id: 5,
    question: "How long does setup take?",
    answer:
      "Project setup usually takes between 7–30 days depending on scale."
  }
];
  return (
    <>
      <div>
        <Header />

        <Hero title="Our FAQ" subtitle="faq" bgImage={heroImg} />
{/* FAQ SECTION START */}
<section className="faq-section">
  <div className="container">

    <div className="row">
      
      {/* LEFT SIDE - FAQ */}
      <div className="col-lg-8 col-12">

        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p className="text-muted">
            Find answers to common questions about our agriculture services,
            farming solutions, and partnerships.
          </p>
        </div>

        <div className="accordion custom-faq" id="faqAccordion">

          {/* ITEM */}
  {faqData.map((item) => (
    <div className="accordion-item" key={item.id}>

      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed faq-btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#faq${item.id}`}
        >
          {item.id}. {item.question}
        </button>
      </h2>

      <div
        id={`faq${item.id}`}
        className="accordion-collapse collapse"
        data-bs-parent="#faqAccordion"
      >
        <div className="accordion-body faq-body">
          {item.answer}
        </div>
      </div>

    </div>
  ))}

        </div>
      </div>

      {/* RIGHT SIDE - ASIDE */}
      <div className="col-lg-4 col-12 mt-lg-0 mt-5">

        <div className="faq-aside">

          {/* Categories */}
          <div className="aside-box">
            <h4>Categories</h4>

            <ul>
              <li> Agriculture <span>12</span></li>
              <li> Organic <span>16</span></li>
              <li> Vegetables <span>13</span></li>
              <li> Natural Food <span>10</span></li>
            </ul>
          </div>

          {/* Help Box */}
          <div className="aside-box help-box">
            <h5>Need Help?</h5>
            <p>
              Our support team is always ready to assist you with farming
              solutions and services.
            </p>
            <button className="btn-main w-100 mt-4">
              Contact Us
            </button>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
{/* FAQ SECTION END */}

        <ContactForm />

        <Footer />
      </div>
    </>
  );
}

export default faq;