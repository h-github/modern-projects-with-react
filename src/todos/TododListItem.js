import React from "react";

const TododListItem = ({ todo }) => (
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="row justify-content-end">
      <button className="btn btn-success">Mark as Completed</button>
      <button className="btn btn-warning">Remove</button>
    </div>
  </div>
);

export default TododListItem;
