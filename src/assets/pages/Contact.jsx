import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Contact Us</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form name="sentMessage" id="contactForm" noValidate>
              {/* Form fields */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;