import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [asignTo, setAsignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (!taskTitle || !taskDescription || !taskDate || !asignTo || !category) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const updatedUserData = userData.map((user) => {
      if (user.firstName === asignTo) {
        return {
          ...user,
          tasks: [...user.tasks, newTask],
          taskCounts: {
            ...user.taskCounts,
            newTask: user.taskCounts.newTask + 1,
          },
        };
      }
      return user;
    });

    setUserData(updatedUserData);
    console.log('Updated user data:', updatedUserData);

    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAsignTo('');
    setCategory('');
  };

  return (
    <div className="p-5 bg-[#212121] mt-5 rounded-lg shadow-lg">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-200 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-1 px-3 w-4/5 rounded bg-[#323232] border-[1px] border-[#444] text-gray-300 focus:border-[#64b5f6] focus:ring-1 focus:ring-[#64b5f6] mb-4"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-200 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-1 px-3 w-4/5 rounded bg-[#323232] border-[1px] border-[#444] text-gray-300 focus:border-[#64b5f6] focus:ring-1 focus:ring-[#64b5f6] mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-200 mb-0.5">Assign To</h3>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className="text-sm py-1 px-3 w-4/5 rounded bg-[#323232] border-[1px] border-[#444] text-gray-300 focus:border-[#64b5f6] focus:ring-1 focus:ring-[#64b5f6] mb-4"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-200 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-1 px-3 w-4/5 rounded bg-[#323232] border-[1px] border-[#444] text-gray-300 focus:border-[#64b5f6] focus:ring-1 focus:ring-[#64b5f6] mb-4"
              type="text"
              placeholder="Design, Dev, etc."
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-200 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 rounded bg-[#323232] border-[1px] border-[#444] text-gray-300 focus:border-[#64b5f6] focus:ring-1 focus:ring-[#64b5f6]"
            placeholder="Describe the task in detail"
          />
          <button
            type="submit"
            className="bg-[#4caf50] py-3 hover:bg-[#388e3c] px-5 rounded text-sm mt-4 w-full text-white font-medium shadow-lg"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
