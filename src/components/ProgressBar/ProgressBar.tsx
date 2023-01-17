import React from "react";

const ProgressBar = ({ completed }: any) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar__container">
        <div className="progress-bar__filler" style={{ width: `${completed}%` }}>
        </div>
      </div>

      <span className="progress-bar__label">{completed}</span>
    </div>

  );
};

export default ProgressBar;