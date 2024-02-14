import React from "react";

const RatingsBarChart = ({ distribution }) => {
  const totalRatings = Object.values(distribution).reduce(
    (sum, value) => sum + value,
    0
  );

  return (
    <div>
      {Object.entries(distribution).map(([stars, count]) => {
        const widthPercentage = (count / totalRatings) * 100;
        return (
          <div key={stars} style={{ marginBottom: "10px" }}>
            <div style={{ fontWeight: "bold" }}>{stars} stars</div>
            <div
              style={{
                background: "lightgray",
                width: "100%",
                height: "20px",
                position: "relative",
              }}
            >
              <div
                style={{
                  background: "dodgerblue",
                  width: `${widthPercentage}%`,
                  height: "100%",
                }}
              ></div>
            </div>
            <div style={{ marginTop: "5px" }}>
              {widthPercentage.toFixed(2) + "%"}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RatingsBarChart;
