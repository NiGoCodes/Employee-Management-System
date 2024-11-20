import React from 'react'

const TaskListNumbers = ({ data }) => {
  return (
    <div className='flex mt-10 justify-between gap-5'>
        
        <div className='rounded-xl w-[45%] py-6 px-9 bg-[#0288D1]'>
            <h2 className='text-3xl font-bold text-white'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl mt-0.5 font-medium text-white'>New Task</h3>
        </div>
        
        <div className='rounded-xl w-[45%] py-6 px-9 bg-[#388E3C]'>
            <h2 className='text-3xl font-bold text-white'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl mt-0.5 font-medium text-white'>Completed Task</h3>
        </div>
        
        <div className='rounded-xl w-[45%] py-6 px-9 bg-[#FFB300]'>
            <h2 className='text-3xl font-bold text-black'>{data.taskCounts.active}</h2>
            <h3 className='text-xl mt-0.5 text-black font-medium'>Active Task</h3>
        </div>
        
        <div className='rounded-xl w-[45%] py-6 px-9 bg-[#D32F2F]'>
            <h2 className='text-3xl font-bold text-white'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl mt-0.5 font-medium text-white'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers
