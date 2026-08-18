import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div name="contact" className="contact">
      <div className="container">
        <div className="top">
          <h1>Contact</h1>
        </div>
        <form>
          <div>
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div>
            <label>Email</label>
            <input type="text" placeholder="Enter your email" />
          </div>
          <div>
            <label>Message</label>
            <textarea placeholder="Enter your message" />
          </div>
          <div className="bottom">
            <button className="btn btn-dark">Send MSG</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
