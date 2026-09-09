import React from "react";
import "./HomeSections.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <div className="contact-grid">

          {/* Left Side */}
          <div className="contact-info">
            <span>CONTACT US</span>

            <h2>
              Let's Talk About
              <strong> Your Project</strong>
            </h2>

            <p>
              Have a project in mind? Fill out the form and our team will
              get back to you as soon as possible.
            </p>

            <div className="contact-details">

              <div className="contact-item">
                <div className="contact-icon">✉</div>
                <div>
                  <small>Email</small>
                  <h4>hello@example.com</h4>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">☎</div>
                <div>
                  <small>Phone</small>
                  <h4>+91 98765 43210</h4>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">⌖</div>
                <div>
                  <small>Location</small>
                  <h4>New Delhi, India</h4>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="contact-form-box">
            <form onSubmit={handleSubmit}>

              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Your Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  required
                />
              </div>

              <div className="form-group">
                <label>Your Message</label>
                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-btn">
                Send Message <span>→</span>
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
