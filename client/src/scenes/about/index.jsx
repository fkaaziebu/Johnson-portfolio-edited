import React from "react";
import { CaretRightFill } from "react-bootstrap-icons";

function About() {
  return (
    <div className="d-flex flex-column p-4 overflow-auto">
      <div className="line-div my-5 text-center">.</div>
      <div className="d-flex flex-column flex-md-row">
        <div className="w-100 w-md-50 me-5">
          <h1 className="fw-lighter fs-2 text-muted mb-4">About Me</h1>
          <div className="text-muted fs-5">
            <div className="mb-4 lh-lg fw-light">
              Hello there! My name is Johnson Addo Ameyaw, and I'm a passionate
              front-end developer with a strong drive to excel in the field of
              web development. I have a deep love for teaching others and
              sharing my knowledge.
            </div>
            <div className="mb-4 lh-lg fw-light">
              I thrive on challenges and constantly seek opportunities to expand
              my skill set and explore emerging technologies. I aim to solve
              problems efficiently and create engaging user experiences.
            </div>
            <div className="mb-4 lh-lg fw-light">
              In addition to my technical pursuits, I believe in maintaining a
              well-rounded lifestyle. When I'm not immersed in lines of code, I
              enjoy playing FIFA, listening to music, and watching movies.
            </div>
            <div className="mb-4 lh-lg fw-light">
              Believing in collaboration and diverse perspectives, I am excited
              to contribute to the evolving world of web development, leveraging
              my skills for meaningful solutions.
            </div>
          </div>
        </div>
        <div className="w-100 w-md-50 ms-md-5">
          <h1 className="fw-lighter fs-2 text-muted mb-4">Details</h1>
          <div className="mb-4">
            <h3 className="fs-5 fw-normal">Name: </h3>
            <p className="text-muted fs-5">Johnson Ameyaw</p>
          </div>
          <div className="mb-4">
            <h3 className="fs-5 fw-normal">Location: </h3>
            <p className="text-muted fs-5">Kumasi, Akata fuor</p>
          </div>
          <div className="mb-4">
            <h3 className="fs-5 fw-normal">Mail: </h3>
            <p className="text-muted fs-5">johnsonameyaw22@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="line-div my-5 text-center">.</div>
      <div className="d-flex flex-column flex-md-row">
        <div className="w-100 w-md-50 me-5">
          <h1 className="fw-lighter fs-2 text-muted mb-4">Services</h1>
          <div className="text-muted">
            <ul>
              <li className="mb-2 list-style-type-circle p-1 fs-5 fw-light">
                <CaretRightFill className="me-3" /> Frontend development Tutoring
              </li>
              <li className="mb-2 list-style-type-circle p-1 fs-5 fw-light">
                <CaretRightFill className="me-3" /> Web development
              </li>
              <li className="mb-2 list-style-type-circle p-1 fs-5 fw-light">
                <CaretRightFill className="me-3" /> Digital document production
              </li>
              <li className="list-style-type-circle p-1 fs-5 fw-light">
                <CaretRightFill className="me-3" /> Interactive user interface design
              </li>
            </ul>
          </div>
        </div>
        <div className="w-100 w-md-50 ms-md-5">
          <h1 className="fw-lighter fs-2 text-muted mb-4">Interest</h1>
          <div className="text-muted">
            <ul>
              <li className="mb-2 list-style-type-circle p-1 fs-5 fw-light">
                <CaretRightFill className="me-3" /> Technology exploration
              </li>
              <li className="mb-2 list-style-type-circle p-1 fs-5 fw-light">
                <CaretRightFill className="me-3" /> Travel and adventure
              </li>
              <li className="mb-2 list-style-type-circle p-1 fs-5 fw-light">
                <CaretRightFill className="me-3" /> Photography
              </li>
              <li className="mb-2 list-style-type-circle p-1 fs-5 fw-light">
                <CaretRightFill className="me-3" /> Teaching and mentoring
              </li>
              <li className="list-style-type-circle p-1 fs-5 fw-light">
                <CaretRightFill className="me-3" /> Music
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="line-div my-5 text-center">.</div>
    </div>
  );
}

export default About;
