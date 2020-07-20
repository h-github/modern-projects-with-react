import React from "react";

const TododListItem = ({ todo, onDeletePressed, onCompletedPressed }) => {
  return (
    <div
      className={`alert alert-${todo.isCompleted ? "secondary" : "primary"}`}
    >
      <div className="row">
        <div className="col-lg-8 col-md-12 todo-item-text">{todo.text}</div>
        <div className="col-lg-4 col-md-12 d-flex justify-content-end">
          {!todo.isCompleted && (
            <button
              className="btn btn-success vertical-margin"
              onClick={() => onCompletedPressed(todo.text)}
            >
              Mark as Completed
            </button>
          )}
          <button
            className="btn btn-danger vertical-margin"
            onClick={() => onDeletePressed(todo.text)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default TododListItem;
