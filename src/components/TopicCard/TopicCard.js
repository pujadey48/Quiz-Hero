import React from "react";
import { Link } from "react-router-dom";

const TopicCard = ({ topic, onTopicSelected }) => {
  return (
    <div className="card p-2 col-lg-3 col-md-6 col-12">
      <img
        src={topic.logo}
        className="card-img-top img-fluid bg-light"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">
          {topic.name} ({topic.total})
        </h5>
        <Link
          to={"/quiz/"+topic.id}
          onClick={() => onTopicSelected(topic)}
          className="btn btn-primary"
        >
          Start Quiz
        </Link>
      </div>
    </div>
  );
};

export default TopicCard;
