import React from 'react';

const TopicCard = ({topic,onTopicSelected}) => {
    return (
        <div className="card">
  <img src={topic.logo} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{topic.name} ({topic.total})</h5>
    <a href="/#" onClick={()=>onTopicSelected(topic)} className="btn btn-primary">Start Quiz</a>
  </div>
</div>
    );
};

export default TopicCard;