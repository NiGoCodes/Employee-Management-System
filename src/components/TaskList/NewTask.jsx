import React from 'react';

const NewTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-600 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded text-white">
          {data.category}
        </h3>
        <h4 className="text-sm text-white">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-white">{data.taskTitle}</h2>
      <p className="text-sm mt-2 text-white">{data.taskDescription}</p>
      <div className="mt-6">
        {/* If the task is not accepted, show the 'Accept Task' button */}
        {!data.accepted && (
          <button className="w-full bg-blue-500 text-white rounded font-medium py-1 px-2 text-xs hover:bg-blue-600 transition">
            Accept Task
          </button>
        )}
        {/* If the task is already accepted, show 'Task Accepted' */}
        {data.accepted && (
          <button className="w-full bg-gray-500 text-white rounded font-medium py-1 px-2 text-xs cursor-not-allowed">
            Task Accepted
          </button>
        )}
      </div>
    </div>
  );
};

export default NewTask;
