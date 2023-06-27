import React from 'react';
import ProgressBarDiv from './ProgressBarDiv';

type ProgressBarProps = {
  completedProgress: number;
};

const ProgressBar = ({ completedProgress }: ProgressBarProps) => {
  return (
    <div className="px-4">
      <h2 className="font-bold text-black text-xl mb-4">Lodgify Grouped Tasks</h2>
      <div className="w-full bg-gray-300 rounded-xl mb-8">
        <ProgressBarDiv $completedProgress={completedProgress}>
          <span className="text-sm text-white font-bold">{completedProgress}%</span>
        </ProgressBarDiv>
      </div>
    </div>
  );
};

export default ProgressBar;
