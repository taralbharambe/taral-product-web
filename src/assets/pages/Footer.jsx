import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <span className="copyright">Copyright © Your Website 2014</span>
          </div>
          <div className="col-md-4">
            <ul className="list-inline social-buttons">
              {/* Social buttons */}
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-inline quicklinks">
              {/* Quick links */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;