import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/styles.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand text-light font-weight-bold">
          AltRose™
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="icon ion-md-menu lead text-light"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-2">
              <Link to="/" className="nav-link text-light active">
                New Arrivals
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link to="/" className="nav-link text-light" href="#">
                Shop
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link to="/" className="nav-link text-light" href="#">
                About
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link to="/Contacto" className="nav-link text-light" href="#">
                Contact
              </Link>
            </li>
            <li className="nav-item mr-3 ">
              <Link to="/Login" className="nav-link  text-light" href="#">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
