import React from "react";
import { useLoaderData } from "react-router-dom";
import TopicCard from "../TopicCard/TopicCard";

const Home = () => {
  const topics = useLoaderData();
  console.log("topics: ", topics);
  const onTopicSelected = (topic) => {
    console.log(topic);
  };

  return (
    <div className="container">
      <div className="row mb-3 mt-3">
        <img src="quiz_image.jpeg" className="card-img-top img-fluid bg-light" alt="..." />
      </div>
      <div className="d-flex flex-wrap row">
        {topics.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            onTopicSelected={onTopicSelected}
          ></TopicCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
