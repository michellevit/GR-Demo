import React from "react";
import "./RatingsBarChart.css";

const RatingsBarChart = ({ distribution }) => {
  const totalRatings = Object.values(distribution).reduce(
    (sum, value) => sum + value,
    0
  );

  return (
    <div className="ratings-bar-chart-container">
    <h3>Ratings</h3>
    <div className="ratings-bar-chart">
      {Object.entries(distribution).map(([stars, count]) => {
        const widthPercentage = (count / totalRatings) * 100;
        return (
          <div className="bar-row" key={stars}>
            <div className="stars">{stars} stars</div>
            <div className="outer-bar">
              <div
                className="inner-bar"
                style={{
                  width: `${widthPercentage}%`,
                }}
              ></div>
            </div>
            <div className="percentage">{widthPercentage.toFixed(1) + "%"}</div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default RatingsBarChart;