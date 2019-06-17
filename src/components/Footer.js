import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
      <div className="text-center">
        <small>This is a template and all the links are disabled.</small><br/>
        <small>Feel free to DM me to <span><em>tiagofho@gmail.com</em></span></small>
        <div id="social">
          <div>
            <i className="fa fa-facebook-f" />
          </div>
          <div>
            <i className="fa fa-github" />
          </div>
          <div>
            <i className="fa fa-linkedin" />
          </div>
          <div>
            <i className="fa fa-instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
