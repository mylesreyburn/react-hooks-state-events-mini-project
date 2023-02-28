import React from "react";

function Task( {text, category, deleteButton} ) {

  // console.log("inside of Task btw:", text)
  return (
    <div className="task">
      <div className="label">
        <p>{category}</p>
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
      <button className="delete" onClick={deleteButton}>X</button>
    </div>
  );
}

export default Task;
