import React from 'react'

const FilteringSelections = ({filterTodos, clearCompletedTodos}) => {
  return (
    <>
      <div className="buttons">
        <button className="btn" onClick={() => filterTodos("all")}>
          All
        </button>
        <button className="btn" onClick={() => filterTodos("active")}>
          Active
        </button>
        <button className="btn" onClick={() => filterTodos("completed")}>
          Completed
        </button>
      </div>
      <button onClick={clearCompletedTodos} className="clear-btn">
        Clear Completed
      </button>
    </>
  );
}

export default FilteringSelections