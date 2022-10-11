import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import TopicCard from "../TopicCard/TopicCard";

const Home = () => {
  const topics = useLoaderData();
  console.log("topics: ", topics);
  const onTopicSelected = (topic) => {
    console.log(topic);
  };

  return (
    <div className="container">
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
