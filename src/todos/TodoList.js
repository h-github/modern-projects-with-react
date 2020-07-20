import React from "react";
import { connect } from "react-redux";

import { removeTodo, markTodAsCompleted } from "../actions";
import TododListItem from "./TododListItem";
import NewTodoForm from "./NewTodoForm";

const TodoList = ({ todos = [], onDeletePressed, onCompletedPressed }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo, index) => (
      <TododListItem
        key={index}
        todo={todo}
        onDeletePressed={onDeletePressed}
        onCompletedPressed={onCompletedPressed}
      />
    ))}
  </div>
);

const mapStateToProps = state => {
  console.log(state);
  const { todos } = state;
  return { todos };
};

const mapDispatchToProps = dispatch => ({
  onDeletePressed: text => dispatch(removeTodo(text)),
  onCompletedPressed: text => dispatch(markTodAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
