import React from "react";

interface ProgressBarProps {
  id: number | string;
  name: string;
  percentage: number;
}

const ProgressBar = ({ name, percentage }: ProgressBarProps) => {
  return (
    <div>
      <h4 className="mb-2 text-xl font-semibold">{name}</h4>
      <div className="w-full h-3 bg-gray-200 rounded-full">
        <div
          className="bg-orange-500 h-3 rounded-full relative"
          style={{ width: `${percentage}%` }}
        >
          <span className="absolute right-0 inset-y-1/2 -translate-y-1/2 p-3 border-4 border-orange-500 h-3 bg-gray-200 rounded-full inline-block w-3"></span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
