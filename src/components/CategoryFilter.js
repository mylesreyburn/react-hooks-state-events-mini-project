import React from "react";

function CategoryFilter( {categoryData, filterCategoryFunction} ) {
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryData.map((item) => {
        return <button key={item} onClick={filterCategoryFunction}>{item}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
