import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import heroImg from "../assets/images/post-img.jpg";
import errorBg from "../assets/images/404-bg.jpg";
import "../styles/error.css"

function Error() {
  return (
    <>
      <Header />

      {/* ERROR SECTION */}
      <section
        className="error-page-bg"
        style={{ backgroundImage: `url(${errorBg})` }}
      >
        <div className="error-overlay"></div>

        <div className="container">
          <div className="error-container">
            <h1>404</h1>

            <p className="title">Oops! Page not found</p>

            <p className="subtitle">
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>

            <a href="/" className="btn-main mt-4">
              Back to Home
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Error;