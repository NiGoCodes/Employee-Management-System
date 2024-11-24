import React from 'react';

const CompleteTask = ({ data , val }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-600 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-green-600 text-sm px-3 py-1 rounded text-white">
          {data.category}
        </h3>
        <h4 className="text-sm text-white">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-white">{data.taskTitle}</h2>
      <p className="text-sm mt-2 text-white">{data.taskDescription}</p>
      <div className="mt-6">
        {/* Only show 'Complete' button if the task is not yet completed */}
        {!data.completed && (
          <button className="w-full bg-green-600 text-white rounded font-medium py-1 px-2 text-xs hover:bg-green-700 transition" onClick={() => val.taskCounts.completed++}>
            Mark as Completed
          </button>
        )}
        {/* Show 'Completed' button if the task is already completed */}
        {data.completed && (
          <button className="w-full bg-gray-500 text-white rounded font-medium py-1 px-2 text-xs cursor-not-allowed">
            Completed
          </button>
        )}
      </div>
    </div>
  );
};

export default CompleteTask;
