import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                
                <Link to="/" className="nav-link active">Home</Link>

              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link active">About</Link>
                
              </li>
              <li className="nav-item">
                <Link to="/use-effect" className="nav-link active">UseEffect</Link>
              </li>
              <li className="nav-item">
                <Link to="/use-ref" className="nav-link active">UseRef</Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
