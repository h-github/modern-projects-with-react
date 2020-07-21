import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodoRequest } from "./thunks";

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [todo, setTodo] = useState("");

  const _handleSubmit = e => {
    e.preventDefault();
    if (todo && todos.filter(td => td.text === todo).length === 0) {
      onCreatePressed(todo);
    }
    setTodo("");
  };

  return (
    <div className="jumbotron">
      <h2>Create Todo</h2>
      <br />
      <form onSubmit={e => _handleSubmit(e)}>
        <div className="form-group">
          <input
            name="todoText"
            type="text"
            className="form-control"
            aria-describedby="todoHelp"
            placeholder="Type your new todo"
            value={todo}
            onChange={event => setTodo(event.target.value)}
          ></input>
        </div>

        <button className="btn btn-primary" type="submit">
          Create Todo
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  onCreatePressed: text => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
