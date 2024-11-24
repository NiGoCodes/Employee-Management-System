import React, { useState } from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
const EmployeeDashboard = (props) => {
  const [ct,setCt] = useState(0);
   return (
    <div className = 'p-20 bg-[#1C1C1C] h-screen'>
      <Header changeUser={props.changeUser} data = {props.data} />
      <TaskListNumbers data = {props.data} ct={ct}/>
      <TaskList data = {props.data} ct= {ct} setCt = {setCt} />
    </div>
  )
}

export default EmployeeDashboard
