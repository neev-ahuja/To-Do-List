import React from "react";

function AddTask({ handleClick ,addTask , tasks , closeAddTask }) {
  
  
  let taskName = "" ;
  let taskDate = "";
  let taskDescription = "" ;

  const saveTask =() => {
    handleClick();
    const newTask = [...tasks , {name : taskName , date : taskDate , description : taskDescription , isChecked : false}];
    addTask(newTask);
    localStorage.setItem('data' , JSON.stringify(newTask));
  }

  return (
    <div id="taskModal" className="modal">
      <div className="modal-content">
        <h2>Add Task</h2>
        <label htmlFor="taskName">Task Name:</label>
        <input type="text" id="taskName" placeholder="Enter task name" onChange={(e)=>{taskName = e.target.value}}></input>
        <label htmlFor="taskDate">Task Date:</label>
        <input type="date" id="taskDate" onChange={(e)=>{taskDate = e.target.value}}></input>
        <label htmlFor="taskDescription">Task Description:</label>
        <textarea id="taskDescription" placeholder="Enter task description" onChange={(e)=>{taskDescription = e.target.value}}  ></textarea>
        <button id="saveTaskButton" onClick={saveTask}>Save Task</button>
        <button id="closeModalButton" onClick={closeAddTask}>Close</button>
      </div>
    </div>
  )
}

export default AddTask