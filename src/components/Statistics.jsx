import React from "react";
import "./HomeSections.css";

const Statistics = () => {
  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "120+", label: "Projects Completed" },
    { number: "10+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section className="statistics-section">
      <div className="section-container">
        <div className="section-heading">
          <span>OUR ACHIEVEMENTS</span>
          <h2>Numbers That Speak</h2>
          <p>
            Our experience and dedication can be seen through the results
            we have achieved.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
