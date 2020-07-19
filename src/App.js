import React from "react";
import { hot } from "react-hot-loader";
import TodoList from "./todos/TodoList";
import NewTodoForm from "./todos/NewTodoForm";
import "./App.css";

const App = () => (
  <div className="App jumbotron">
    <TodoList todos={[]} />
    <NewTodoForm />
  </div>
);

export default hot(module)(App);
