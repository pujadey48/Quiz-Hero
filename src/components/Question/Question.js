import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/fontawesome-free-solid";

const Question = ({ questionObj, index, answerSelected, showRightAnswer }) => {
  const { options, id, question, correctAnswer } = questionObj;

  //   function createMarkup() {
  //     return {__html: question};
  //   }

  return (
    <div className="m-4 card border-0">
      {/* <div dangerouslySetInnerHTML={createMarkup()}/> */}
      <div className="m-2 d-flex w-auto justify-content-between">
        <div >
          <span>Quiz {index + 1}: </span>
          <span>{question}</span>
        </div>
        <div >
          <FontAwesomeIcon
            icon={faEye}
            onClick={() => {
              showRightAnswer(correctAnswer);
            }}
          />
        </div>
      </div>

      <div
        className="btn-group-vertical"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        {options.map((option, ind) => (
          <Fragment>
            <input
              type="radio"
              className="btn-check"
              name={id + "_btnradio"}
              id={id + "_" + ind}
              autocomplete="off"
            />
            <label
              className="btn btn-outline-primary"
              for={id + "_" + ind}
              onClick={() => {
                answerSelected(option, correctAnswer);
              }}
            >
              {option}
            </label>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Question;
