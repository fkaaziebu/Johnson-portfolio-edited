import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-1" to="/">
          Johnson
        </Link>
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
          <div className="container-fluid d-flex flex-column flex-lg-row justify-content-end p-2">
            <Link
              className="nav-link active p-2 mx-2 fs-3"
              aria-current="page"
              to="/"
            >
              Home
            </Link>
            <Link className="nav-link p-2 mx-2 fs-3" to="/about">
              About
            </Link>
            <Link className="nav-link p-2 mx-2 fs-3" to="/projects">
              Projects
            </Link>
            <Link className="nav-link p-2 mx-2 fs-3" to="/resume">
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
