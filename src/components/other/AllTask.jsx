import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className='bg-[#121212] p-5 rounded mt-5'>
      <div className='bg-[#1E1E2F] mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='text-lg font-medium text-[#E0E0E0] w-1/5'>Employee Name</h2>
        <h3 className='text-lg font-medium text-[#E0E0E0] w-1/5'>New Task</h3>
        <h5 className='text-lg font-medium text-[#E0E0E0] w-1/5'>Active Task</h5>
        <h5 className='text-lg font-medium text-[#E0E0E0] w-1/5'>Completed</h5>
        <h5 className='text-lg font-medium text-[#E0E0E0] w-1/5'>Failed</h5>
      </div>
      <div>
        {userData.map((elem, idx) => {
          return (
            <div
              key={idx}
              className='border-2 border-[#424242] mb-2 py-2 px-4 flex justify-between rounded'
            >
              <h2 className='text-lg font-medium text-[#E0E0E0] w-1/5'>{elem.firstName}</h2>
              <h3 className='text-lg font-medium text-[#03A9F4] w-1/5'>{elem.taskCounts.newTask}</h3>
              <h5 className='text-lg font-medium text-[#FFEB3B] w-1/5'>{elem.taskCounts.active + elem.taskCounts.newTask}</h5>
              <h5 className='text-lg font-medium text-[#8BC34A] w-1/5'>{elem.taskCounts.completed}</h5>
              <h5 className='text-lg font-medium text-[#F44336] w-1/5'>{elem.taskCounts.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
