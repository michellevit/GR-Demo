import React from "react";
import "./RatingsBarChart.css";

interface RatingsBarChartProps {
  distribution: Record<number, number>;
}

const RatingsBarChart: React.FC<RatingsBarChartProps> = ({ distribution }) => {
  const totalRatings = Object.values(distribution).reduce((sum, value) => sum + value, 0);
  console.log("Distribution:", distribution);
  console.log("Total Ratings:", totalRatings);
  return (
    <div className="ratings-bar-chart-container">
      <h3>Ratings</h3>
      <div className="ratings-bar-chart">
        {Object.entries(distribution).map(([stars, count]) => {
          const widthPercentage = totalRatings > 0 ? (count / totalRatings) * 100 : 0; 
          return (
            <div className="bar-row" key={stars}>
              <div className="stars">{stars} star</div>
              <div className="outer-bar">
                <div
                  className="inner-bar"
                  style={{
                    width: `${widthPercentage}%`,
                  }}
                ></div>
              </div>
              <div className="percentage">{Math.round(widthPercentage) + "%"}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RatingsBarChart;
