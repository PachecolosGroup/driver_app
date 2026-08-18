import React from "react";
import "./SpeedStyles.css";

const Speed = () => {
  return (
    <div name="speed" className="speed">
      <div className="container">
        <div className="top">
          <h1>Speed</h1>
        </div>
        <div className="bottom">
          <div className="btn btn-dark">Drive</div>
          <div className="btn btn-clear">Ride</div>
        </div>
      </div>
    </div>
  );
};

export default Speed;
