import React from "react";
import { Link } from "react-router-dom";
import ProfileImage from "../images/ProfileImage.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-1" to="/">
          Johnson
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
          // aria-expanded="false"
          // aria-label="Toggle navigation"
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
        <div
          class="d-flex d-md-none offcanvas offcanvas-end w-50"
          data-bs-scroll="true"
          tabindex="-1"
          id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div class="offcanvas-header">
            <div></div>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div className="d-flex justify-content-center mb-2">
              <img
                className="img-fluid img-thumbnail profile"
                src={ProfileImage}
                alt="Profile"
              />
            </div>
            <Link
              className="nav-link active p-2 mx-2 fs-3 text-center"
              aria-current="page"
              to="/"
            >
              Home
            </Link>
            <Link className="nav-link p-2 mx-2 fs-3 text-center" to="/about">
              About
            </Link>
            <Link className="nav-link p-2 mx-2 fs-3 text-center" to="/projects">
              Projects
            </Link>
            <Link className="nav-link p-2 mx-2 fs-3 text-center" to="/resume">
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
