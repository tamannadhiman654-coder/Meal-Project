import React from "react";
import "./HomeSections.css";

const CTA = () => {
  return (
    <section className="cta-section">

      <div className="cta-glow"></div>

      <div className="cta-container">

        <div className="cta-content">

          <div className="cta-tag">
            <span></span>
            FRESH • TASTY • DELICIOUS
          </div>

          <h2>
            Hungry?
            <br />
            <span>Let's fix that.</span>
          </h2>

          <p>
            Fresh ingredients, delicious meals, and flavors you'll love.
            Explore our menu and order your favorite meal today.
          </p>

          <div className="cta-actions">

            <a href="#menu" className="cta-btn">
              Explore Menu
              <span>↗</span>
            </a>

            <a href="#contact" className="cta-secondary-btn">
              Order Now
            </a>

          </div>

        </div>


        {/* Decorative Design */}

        <div className="cta-decoration">

          <div className="cta-circle circle-one"></div>

          <div className="cta-circle circle-two"></div>

          <div className="cta-line"></div>

          <div className="cta-food-icon">
            🍽️
          </div>

        </div>

      </div>

    </section>
  );
};

export default CTA;
