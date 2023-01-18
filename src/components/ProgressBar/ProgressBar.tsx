import React from "react";

export const COMPONENT_ID = 'pokedex-progress-bar'

type ProgressBarProps = {
  completed: number,
}

const ProgressBar = ({ completed }: ProgressBarProps) => {
  return (
    <div className="progress-bar" id={COMPONENT_ID}>
      <div className="progress-bar__container">
        <div className="progress-bar__filler" style={{ width: `${completed}%` }}>
        </div>
      </div>

      <span className="progress-bar__label">{completed}</span>
    </div>

  );
};

export default ProgressBar;