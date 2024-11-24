import React ,{useContext , useState }from 'react'
import { AuthContext } from '../../context/AuthProvider';


const AcceptTask = ({ data ,ct, setCt}) => {
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  // Handler to hide the button
  const handleClick = () => {
    setIsButtonVisible(false);
  };
  // console.log(data)
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-gray-800 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-yellow-600 text-sm px-3 py-1 rounded text-white'>
          {data.category}
        </h3>
        <h4 className='text-sm text-gray-300'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold text-white'>{data.taskTitle}</h2>
      <p className='text-sm mt-2 text-gray-400'>
        {data.taskDescription}
      </p>
      {/* Only show buttons if the task is not completed or failed */}
      {!data.completed && !data.failed && (
        <div className='flex justify-between mt-6'>
          <button
            className='bg-green-600 text-white rounded font-medium py-1 px-2 text-xs hover:bg-green-700 transition'
            
          >
            Mark as Completed
          </button>
          <button
            className='bg-red-600 text-white rounded font-medium py-1 px-2 text-xs hover:bg-red-700 transition'
            onClick={() => {
              setCt(ct + 1);
              handleClick;
            }}
          >
            Mark as Failed
          </button>
        </div>
      )}
    </div>
  )
}

export default AcceptTask;
