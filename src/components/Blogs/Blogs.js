import React from "react";

const Blogs = () => {
  return (
    <div className="container mt-5">
      <div className="w-50 mx-auto">
        <h2 className="text-center">Frequently Asked Questions</h2>
        <p className="text-center text-muted small">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      <div className="w-75 mx-auto mt-5 mb-5">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                How does react work?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="text-muted small">
                  ReactJS divides the UI into isolated reusable pieces of code
                  known as components. React components work similarly to
                  JavaScript functions as they accept arbitrary inputs called
                  properties or props. It's possible to have as many components
                  as necessary without cluttering your code.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                What is the difference between props and state?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="text-muted small">
                  Props are used to pass data from one component to another. The
                  state is a local data storage that is local to the component
                  only and cannot be passed to other components.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What are the use cases of useEffect hook except API data load?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="text-muted small">
                  <ul>
                    <li>Running once on mount: fetch API data.</li>
                    <li>Running on state change: validating input field.</li>
                    <li>Running on state change: live filtering.</li>
                    <li>
                      Running on state change: trigger animation on new array
                      value.
                    </li>
                    <li>
                      Running on props change: update paragraph list on fetched
                      API data update.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
