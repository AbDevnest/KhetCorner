import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { useState } from "react";
import heroImg from "../assets/images/post-img.jpg";
import "../styles/contact-main.css";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors((prev) => {
      let newErrors = { ...prev };

      if (name === "name" && value.trim()) {
        delete newErrors.name;
      }

      if (name === "email") {
        if (/\S+@\S+\.\S+/.test(value)) {
          delete newErrors.email;
        }
      }

      if (name === "phone") {
        if (/^[0-9]{10}$/.test(value)) {
          delete newErrors.phone;
        }
      }

      if (name === "message" && value.trim()) {
        delete newErrors.message;
      }

      return newErrors;
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    return newErrors;
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted Successfully 🚀");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };
  return (
    <>
      <div>
        <Header />

        <Hero title="Our Contact" subtitle="Contact" bgImage={heroImg} />

        <section className="contact-v2 fade-up">
          <div className="container">
            <div className="row align-items-center">
              {/* LEFT */}
              <div className="col-lg-6 col-12">
                <h2 className="contact-v2-title">
                  Get In <span>Touch</span>
                </h2>

                <p className="contact-v2-desc">
                  We’re here to help you grow better with our organic solutions.
                </p>

                <div className="contact-v2-info">
                  <div className="contact-v2-item">
                    <i className="fas fa-phone"></i>
                    <p>+91 12349 43210</p>
                  </div>

                  <div className="contact-v2-item">
                    <i className="fas fa-envelope"></i>
                    <p>support@khetcorner.com</p>
                  </div>

                  <div className="contact-v2-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <p>Jaipur, Rajasthan</p>
                  </div>
                </div>
              </div>

              {/* RIGHT FORM */}
              <div className="col-lg-6 col-12">
                <form className="contact-v2-form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <span className="form-error">{errors.name}</span>
                  )}

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="form-error">{errors.email}</span>
                  )}

                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <span className="form-error">{errors.phone}</span>
                  )}

                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <span className="form-error">{errors.message}</span>
                  )}

                  <button type="submit" className="btn-main mt-2">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-v2-map fade-up">
          <iframe
            src="https://maps.google.com/maps?q=Jaipur,Rajasthan&z=13&output=embed"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            title="map"
          ></iframe>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Contact;
