import React from "react";
import "./HomeSections.css";

const Footer = () => {
  return (
    <footer className="meal-footer">

      <div className="meal-footer-overlay">

        <div className="meal-footer-container">

          {/* Brand */}
          <div className="meal-footer-brand">
            <h2>
              Meal<span>.</span>
            </h2>

            <p>
              Delicious meals made with fresh ingredients,
              delivered with love straight to your table.
            </p>

            <div className="meal-social">
              <a href="#instagram">IG</a>
              <a href="#facebook">FB</a>
              <a href="#twitter">TW</a>
            </div>
          </div>


          {/* Quick Links */}
          <div className="meal-footer-column">
            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#menu">Our Menu</a>
            <a href="#about">About Us</a>
            <a href="#offers">Special Offers</a>
            <a href="#contact">Contact</a>
          </div>


          {/* Menu */}
          <div className="meal-footer-column">
            <h3>Our Menu</h3>

            <a href="#breakfast">Breakfast</a>
            <a href="#lunch">Lunch</a>
            <a href="#dinner">Dinner</a>
            <a href="#desserts">Desserts</a>
            <a href="#drinks">Drinks</a>
          </div>


          {/* Contact */}
          <div className="meal-footer-column meal-contact">
            <h3>Get In Touch</h3>

            <p>📍 New Delhi, India</p>
            <p>📞 +91 98765 43210</p>
            <p>✉ hello@meal.com</p>

            <div className="meal-timing">
              <span>Opening Hours</span>
              <strong>10:00 AM - 11:00 PM</strong>
            </div>
          </div>

        </div>


        {/* Bottom */}
        <div className="meal-footer-bottom">

          <p>
            © {new Date().getFullYear()} Meal. All Rights Reserved.
          </p>

          <div>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
