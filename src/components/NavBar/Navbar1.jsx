import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar1(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" to="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="/about" >
                {props.about}
              </a>
            </li>
          </ul>
        </div>
        <div
          className={`form-check form-switch text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            
            onClick={props.toggleMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable Dark Mode
          </label>
        </div>

        <div
          className={`form-check mx-3 form-switch text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleGreen}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable Green Mode
          </label>
        </div>
        <div
          className={`form-check mr-2 form-switch text-${
            props.mode === "light" ? "dark" : "light"
           }`}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            // onClick={props.toggleMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable yellow Mode
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar1.proptotype = {
  title: PropTypes.string,
  about: PropTypes.string.isRequired,
};

// Navbar1.defaultProps = {
//     about: "About us"
// }
