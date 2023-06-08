import React from "react";
import { CaretRightFill } from "react-bootstrap-icons";

function About() {
  return (
    <div className="d-flex flex-column p-4 overflow-auto">
      <div className="d-flex flex-column flex-md-row bg-white p-5">
        <div className="w-100 w-md-50 me-5">
          <div className="fw-lighter fs-2 mb-5">
            <div className="fw-bold">About Me</div>
            <div className="line-div text-center w-15" />
          </div>
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
          <div className="fw-lighter fs-2 mb-5">
            <div className="fw-bold">Details</div>
            <div className="line-div text-center w-15" />
          </div>
          <div className="mb-4">
            <h3 className="fs-5 fw-bold">Name: </h3>
            <p className="text-muted fs-5">Johnson Ameyaw</p>
          </div>
          <div className="mb-4">
            <h3 className="fs-5 fw-bold">Location: </h3>
            <p className="text-muted fs-5">Kumasi, Akata fuor</p>
          </div>
          <div className="mb-4">
            <h3 className="fs-5 fw-bold">Mail: </h3>
            <p className="text-muted fs-5">johnsonameyaw22@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row p-5">
        <div className="w-100 w-md-50 me-5">
          <div className="fw-lighter fs-2 mb-5">
            <div className="fw-bold">Services</div>
            <div className="line-div text-center w-15" />
          </div>
          <div className="text-muted">
            <div>
              <div className="mb-2 list-style-type-circle p-1 fs-5 fw-light">
                <CaretRightFill /> Frontend development Tutoring
              </div>
              <div className="mb-2 list-style-type-circle p-1 fs-5 fw-light">
                <CaretRightFill /> Web development
              </div>
              <div className="mb-2 list-style-type-circle p-1 fs-5 fw-light">
                <CaretRightFill /> Digital document production
              </div>
              <div className="list-style-type-circle p-1 fs-5 fw-light">
                <CaretRightFill /> Interactive user interface design
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 w-md-50 ms-md-5">
          <div className="fw-lighter fs-2 mb-5">
            <div className="fw-bold">Interest</div>
            <div className="line-div text-center w-15" />
          </div>
          <div className="text-muted">
            <div>
              <div className="mb-2 list-style-type-circle p-1 fs-5 fw-light">
                <CaretRightFill /> Technology exploration Tutoring
              </div>
              <div className="mb-2 list-style-type-circle p-1 fs-5 fw-light">
                <CaretRightFill /> Travel and adventure
              </div>
              <div className="mb-2 list-style-type-circle p-1 fs-5 fw-light">
                <CaretRightFill /> Photography
              </div>
              <div className="list-style-type-circle p-1 fs-5 fw-light">
                <CaretRightFill /> Teaching and mentoring
              </div>
              <div className="list-style-type-circle p-1 fs-5 fw-light">
                <CaretRightFill /> Music
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column flex-md-row bg-white p-5">
        <div className="w-100 w-md-50 me-5">
          <div className="fw-lighter fs-2 mb-5">
            <div className="fw-bold">Education</div>
            <div className="line-div text-center w-15" />
          </div>
          <div className="text-muted">
            <div>
              <div className="d-flex mb-2 p-1">
                <div className="d-flex justify-content-center align-items-center bg-lighter rounded-5 px-3 py-2 h-50 me-3 fw-normal me-5">
                  2019 - 2022
                </div>
                <div className="fs-5 fw-light">
                  <h3 className="fs-4 text-black fw-normal">Opoku Ware</h3>
                  <p className="fs-6">High School</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 w-md-50 ms-md-5">
          <div className="fw-lighter fs-2 mb-5">
            <div className="fw-bold">Career</div>
            <div className="line-div text-center w-15" />
          </div>
          <div className="text-muted">
            <div>
              <div className="d-flex mb-2 p-1">
                <div className="d-flex justify-content-center align-items-center bg-lighter rounded-5 px-3 py-2 h-50 me-3 fw-normal me-5">
                  2019 - 2022
                </div>
                <div className="fs-5 fw-light">
                  <h3 className="fs-4 text-black fw-normal">
                    Frontend Engineer
                  </h3>
                  <p className="fs-6">Versified Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column flex-md-row bg-light p-5">
        <div className="w-100 w-md-50 me-5">
          <div className="fw-lighter fs-2 mb-5">
            <div className="fw-bold">Skills</div>
            <div className="line-div text-center w-15" />
          </div>
          <div className="text-muted">
            <div>
              <div className="mb-2 p-1 mb-4">
                <div className="d-flex justify-content-between">
                  <h4 className="fs-5 fw-light">Python</h4>
                  <p>70%</p>
                </div>
                <div className="python-box">
                  <div className="python rounded-5" />
                </div>
              </div>
              <div className="mb-2 p-1 mb-4">
                <div className="d-flex justify-content-between">
                  <h4 className="fs-5 fw-light">JavaScript & React JS, React Native</h4>
                  <p>65%</p>
                </div>
                <div className="python-box">
                  <div className="javascript rounded-5" />
                </div>
              </div>
              <div className="mb-2 p-1 mb-4">
                <div className="d-flex justify-content-between">
                  <h4 className="fs-5 fw-light">HTML & CSS</h4>
                  <p>65%</p>
                </div>
                <div className="python-box">
                  <div className="html rounded-5" />
                </div>
              </div>
              <div className="mb-2 p-1 mb-4">
                <div className="d-flex justify-content-between">
                  <h4 className="fs-5 fw-light">WordPress</h4>
                  <p>50%</p>
                </div>
                <div className="python-box">
                  <div className="wordpress rounded-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 w-md-50 ms-md-5">
          <div className="fw-lighter fs-2 mb-5">
            <div className="fw-bold">Language</div>
            <div className="line-div text-center w-15" />
          </div>
          <div className="text-muted">
            <div>
              <div className="d-flex mb-2 p-1">
                <div className="d-flex justify-content-center align-items-center bg-lighter rounded-5 px-3 py-2 h-50 me-3 fw-normal me-5">
                  2019 - 2022
                </div>
                <div className="fs-5 fw-light">
                  <h3 className="fs-4 text-black fw-normal">
                    Frontend Engineer
                  </h3>
                  <p className="fs-6">Versified Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
