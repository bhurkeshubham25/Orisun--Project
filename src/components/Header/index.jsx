import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <div className="container header-container">
        <div className="logo col-1">
          <p>Orisun</p>
        </div>
        <div className="col-2 navbar">
          <div className="navbar-links">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === "/" ? "active" : ""}`} 
              onClick={() => window.scrollTo(0, 0)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} 
              onClick={() => window.scrollTo(0, 0)}
            >
              About us
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} 
              onClick={() => window.scrollTo(0, 0)}
            >
              Contact us
            </Link>
          </div>
        </div>
        <div className="col-3">
          <Link to="/contact" className="enquiry-button" onClick={() => window.scrollTo(0, 0)}>Make an Enquiry &gt;</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;