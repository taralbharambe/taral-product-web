import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); 
    alert('Form submitted! Thank you for feedback '); 
  };

  return (
    <div className="form-main">
      <div className="main-wrapper">
        <h2 className="form-head">Contact Form</h2>
        <form className="form-wrapper" onSubmit={handleSubmit}>
          <div className="form-card">
            <input
              className="form-input"
              type="text"
              name="full_name"
              required="required"
            />
            <label className="form-label" htmlFor="full_name">Full Name</label>
          </div>

          <div className="form-card">
            <input
              className="form-input"
              type="email"
              name="email"
              required="required"
            />
            <label className="form-label" htmlFor="email">Email</label>
          </div>

          <div className="form-card">
            <input
              className="form-input"
              type="number"
              name="phone_number"
              required="required"
            />
            <label className="form-label" htmlFor="phone_number">Phone number</label>
          </div>

          <div className="form-card">
            <textarea
              className="form-textarea"
              maxLength="420"
              rows="3"
              name="address"
              required="required"
            ></textarea>
            <label className="form-textarea-label" htmlFor="address">Feedback</label>
          </div>
          <div className="btn-wrap">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;