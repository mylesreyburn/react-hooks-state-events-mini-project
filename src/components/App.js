import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import { useState } from "react";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskCategory, setNewTaskCategory] = useState("All");
  const [newTaskArray, setNewTaskArray] = useState([]);

  function filterCategoryButtonFunctionality(event){

    let selectedButtons = document.querySelectorAll(".selected")

    selectedButtons.forEach((button) => {
      button.classList.remove("selected")
    })

    event.target.classList.add("selected")

    setSelectedCategory(event.target.textContent)
    // console.log(selectedCategory)
  }

  function changeName(event){
    setNewTaskName(event.target.value)
    console.log(newTaskName)
  }

  function changeCategory(event){
    setNewTaskCategory(event.target.value)
    console.log(newTaskCategory)
  }

  function addTask(event){
    event.preventDefault()
    const newTaskData = {
      text: newTaskName,
      category: newTaskCategory
    }
    const newTaskDataArray = [...newTaskArray, newTaskData]
    setNewTaskArray(newTaskDataArray)
    console.log(newTaskArray)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categoryData={CATEGORIES} filterCategoryFunction={filterCategoryButtonFunctionality}/>
      <NewTaskForm categoryList={CATEGORIES} onNameChange={changeName} onCategoryChange={changeCategory} onTaskFormSubmit={addTask}/>
      <TaskList taskData={TASKS} brandNewTaskData={newTaskArray} filterCategory={selectedCategory}/>
    </div>
  );
}

export default App;
