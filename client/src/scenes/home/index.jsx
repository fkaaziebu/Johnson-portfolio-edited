import React from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";

function Home() {
  return (
    <div className="d-flex flex-column justify-content-center ps-4">
      <h1 className="display-3 fw-bold mb-4">JOHNSON AMEYAW</h1>
      <div className="divider mb-5"></div>
      <div className="mb-4">
        <p className="fs-3 text-muted mb-5">
          I can{" "}
          <Typed
            strings={[
              "get you a website",
              "design interactive user interface",
              "produce digital documents",
              "teach Frontend development",
            ]}
            className="fw-bold text-black"
            typeSpeed={30}
            backSpeed={30}
            loop
          />
        </p>
      </div>
      <div>
        <Link className="text-decoration-none bg-dark p-4 text-light fs-3" to="/">Read about me</Link>
      </div>
    </div>
  );
}

export default Home;
