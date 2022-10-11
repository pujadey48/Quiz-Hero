import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import TopicCard from '../TopicCard/TopicCard';

const Home = () => {
    const topics = useLoaderData();
    console.log("topics: ",topics);
    const onTopicSelected = (topic) =>{
        console.log(topic);
    }

    return (
        <div>
            {
                    topics.map(topic => <TopicCard
                        key={topic.id}
                        topic={topic}
                        onTopicSelected={onTopicSelected}
                    ></TopicCard>)
                }
        </div>
    );
};

export default Home;