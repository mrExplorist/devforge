import React from 'react';

const InsightRoll = ({ insights }) => {
  return (
    <div className="w-full  text-color-light dark:text-color-light whitespace-nowrap overflow-hidden">
      <div className="animate-roll  w-full py-2 sm:py-3 flex items-center justify-center capitalize font-semibold tracking-wider text-sm sm:text-base">
        {insights.map((text, i) => (
          <div key={i}>
            {text} <span className="px-4">|</span>{' '}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightRoll;
