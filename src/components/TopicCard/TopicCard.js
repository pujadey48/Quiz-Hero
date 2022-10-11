import React from "react";

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
        <a
          href="/#"
          onClick={() => onTopicSelected(topic)}
          className="btn btn-primary"
        >
          Start Quiz
        </a>
      </div>
    </div>
  );
};

export default TopicCard;
