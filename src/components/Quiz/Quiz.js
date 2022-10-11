import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Quiz = () => {
  const { id } = useParams();
  console.log("id", id);
  const quiz = useLoaderData();
  console.log("quiz in Quiz", quiz);

  const answerSelected = (selectedAnswer, correctAnswer) => {
    console.log(selectedAnswer, correctAnswer);
    if (selectedAnswer === correctAnswer) {
      toast.success("Correct Answer !", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.warning("Wrong Answer !", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const showRightAnswer = (correctAnswer) => {
    console.log(correctAnswer);
    toast.info("Correct Answer : " + correctAnswer, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return "error" in quiz ? (
    <div className="container">
      <h1>{quiz.error}</h1>
    </div>
  ) : (
    <div className="container">
      <h2>Quiz of : {quiz.name}</h2>
      <h5>Total questions : {quiz.total}</h5>
      {quiz.questions.map((question, index) => (
        <Question
          key={question.id}
          questionObj={question}
          answerSelected={answerSelected}
          showRightAnswer={showRightAnswer}
          index={index}
        ></Question>
      ))}
      <ToastContainer />
    </div>
  );
};

export default Quiz;
