import React from "react";

function NewTaskForm( { categoryList, onTaskFormSubmit, onNameChange, onCategoryChange } ) {
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={onNameChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={onCategoryChange}>
          {categoryList.map((category) => {
            return <option key={category} value={category}>{category}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
