import React from "react";
import "./OrderConfirmed.css";
import { Link } from "react-router-dom";

function Orderconfirmed() {
  return (
  
  <div className="order-confirmed">

      <div className="confirmation-box">

        {/* Tick Mark */}
        <div className="tick">
          ✓
        </div>

        <h1>Congratulations! 🎉</h1>

        <h2>Your Order Has Been Confirmed</h2>

        <p>
          Thank you for ordering with us! ❤️
          <br />
          Your delicious food is being prepared.
        </p>

     <Link to="/Home">
        <button className="continue-btn">
          Continue Shopping
        </button>
     </Link>

      </div>

    </div>
  );
}

export default Orderconfirmed;