import React from 'react';

const FailedTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-yellow-600 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded text-white">
          {data.category}
        </h3>
        <h4 className="text-sm text-white">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-white">{data.taskTitle}</h2>
      <p className="text-sm mt-2 text-white">{data.taskDescription}</p>
      <div className="mt-6">
        {/* If task is not failed, show 'Failed' button */}
        {!data.failed && (
          <button className="w-full bg-red-500 text-white rounded font-medium py-1 px-2 text-xs hover:bg-red-600 transition">
            Mark as Failed
          </button>
        )}
        {/* If task is already failed, show 'Already Failed' button */}
        {data.failed && (
          <button className="w-full bg-gray-500 text-white rounded font-medium py-1 px-2 text-xs cursor-not-allowed">
            Already Failed
          </button>
        )}
      </div>
    </div>
  );
};

export default FailedTask;
