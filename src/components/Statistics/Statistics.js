import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const topics = useLoaderData();

  const data = {
    labels: [],
    datasets: [
      {
        label: "# of Questions",
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  topics.forEach(topic => {
    data.labels.push(topic.name);
    data.datasets[0].data.push(topic.total)
  });

  return (
    <div className="container mb-5">
      <h1>Quiz statistics</h1>
      <Pie data={data} className='w-75 h-auto'/>
    </div>
  );
};

export default Statistics;
