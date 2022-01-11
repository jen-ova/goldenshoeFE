import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "../styles/newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter_container">
      {/* <div className="newsletter_title">Newsletter</div> */}
      <div className="newsletter_description"> Join our newsletter for 10% off your first purchase</div>
      <div className="newsletter_inputContainer">
        <input placeholder="Your email here..." className="newsletter_input"/>
        <button className="newsletter_button">
        <FontAwesomeIcon icon={faEnvelope} />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
