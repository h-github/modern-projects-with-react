import React from "react";
import TododListItem from "./TododListItem";

const TodoList = ({ todos }) => (
  <div className="list-wrapper">
    {todos.map((todo, index) => (
      <TododListItem key={index} todo={todo} />
    ))}
  </div>
);

export default TodoList;
