import React, { useState } from "react";
import "../styles/contact.css";

function ContactForm() {
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
    [name]: value
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
    let err = {};

    if (!formData.name) err.name = "Name required";
    if (!formData.email) err.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) err.email = "Invalid email";

    if (!formData.phone) err.phone = "Phone required";
    else if (!/^[0-9]{10}$/.test(formData.phone)) err.phone = "Invalid number";

    if (!formData.message) err.message = "Message required";

    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();

    if (Object.keys(validation).length === 0) {
      alert("Form Submitted 🚀");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      setErrors(validation);
    }
  };

  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div className="contact-row">
            {/* LEFT SIDE */}
            <div className="contact-left">
              <p className="subtitle">Get In Touch</p>
              <h2>Contact Us</h2>

              <div className="info d-flex flex-column justify-content-center gap-2">
                <i className="fa-solid fa-location-dot icon"></i>
                <div>
                  <h4>Address</h4>
                  <p>Jaipur, Rajasthan, India</p>
                </div>
              </div>

              <div className="info d-flex flex-column justify-content-center gap-2">
                <i className="fa-solid fa-phone icon"></i>
                <div>
                  <h4>Phone</h4>
                  <p>+91 1233543210</p>
                </div>
              </div>

              <div className="info d-flex flex-column justify-content-center gap-2">
                <i className="fa-solid fa-envelope icon"></i>
                <div>
                  <h4>Email</h4>
                  <p>support@khetcorner.com</p>
                </div>
              </div>
            </div>

            {/* FORM (ABSOLUTE CENTER) */}
            <div className="contact-form-box">
              <form onSubmit={handleSubmit}>
                <input
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <span>{errors.name}</span>

                <input
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <span>{errors.email}</span>

                <input
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <span>{errors.phone}</span>

                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                />
                <span>{errors.message}</span>

                <button className="btn-main ctn-btn" type="submit">
                  SEND
                </button>
              </form>
            </div>

            {/* RIGHT MAP */}
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps?q=Jaipur&output=embed"
                title="map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
