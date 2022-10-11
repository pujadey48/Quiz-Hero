import React from "react";
import { useLoaderData } from "react-router-dom";
import TopicCard from "../TopicCard/TopicCard";

const Home = () => {
  const topics = useLoaderData();
  // console.log("topics: ", topics);

  return (
    <div className="container">
      <div className="card row border-0 m-3">
        <img src="viral-quizzes.jpeg" className="card-img img-fluid " alt="..." />
        <div className="card-img-overlay pt-3 pb-3 ps-5 text-white">
          <h5 className="card-title">Quiz Hero : Make Your Own Quiz App for Free</h5>
          <p className="card-text">
          Whether you need to create an online quiz app for your classroom or just for fun, get started with this free quiz app maker.
          </p>
        </div>
      </div>
      <div className="d-flex flex-wrap row">
        {topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic}></TopicCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
