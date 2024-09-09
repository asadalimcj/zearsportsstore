import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>ZearSports</h1>
          <p>Explore The Beauty of World</p>
        </div>
        <div>
          <Link to="/">
            <i className="fa-brands fa-facebook-square"></i>
          </Link>
          <Link to="/">
            <i className="fa-brands fa-instagram-square"></i>
          </Link>
          <Link to="/">
            <i className="fa-brands fa-twitter-square"></i>
          </Link>
        </div>
        
      </div>
      <div className="bottom">
        <div>
          <h4>Projects</h4>
          <Link to="/">Changelog</Link>
          <Link to="/">Status</Link>
          <Link to="/">License</Link>
          <Link to="/">All Versions</Link>
        </div>
        <div>
          <h4>Community</h4>
          <Link to="/">GitHub</Link>
          <Link to="/">Issues</Link>
          <Link to="/">Projects</Link>
          <Link to="/">Twitter</Link>
        </div>
        <div>
          <h4>Help</h4>
          <Link to="/">Support</Link>
          <Link to="/">TroubleShooting</Link>
          <Link to="/">Contact Us</Link>
        </div>
        <div>
          <h4>Others</h4>
          <Link to="/">Terms Of Service</Link>
          <Link to="/">Privacy</Link>
          <Link to="/">License</Link>
        </div>
      </div>
    </div>
  );
}
