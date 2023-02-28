import React from "react";
import Task from "./Task";

function TaskList( {taskData, brandNewTaskData, filterCategory} ) {
  // console.log("inside of TaskList btw:", taskData)

  function deleteButtonFunctionality(event) {
    event.target.parentElement.remove()
  }

  const tasksToDisplay = taskData.filter((task) => {
    if(filterCategory === "All"){
      return true
    }
    
    return (task.category === filterCategory)
  })

  return (
    <div className="tasks">
      {tasksToDisplay.map((task) => {
        return <Task key={task.text} text={task.text} category={task.category} deleteButton={deleteButtonFunctionality}/>
      })}
      {brandNewTaskData.map((task) => {
        return <Task key={task.text} text={task.text} category={task.category} deleteButton={deleteButtonFunctionality}/>
      })}
    </div>
  );
}

export default TaskList;
