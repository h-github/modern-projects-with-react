import React, { useState } from "react";

const NewTodoForm = () => {
  const [todo, setTodo] = useState("");

  const _handleSubmit = () => {
    console.log(todo);
  };

  return (
    <div>
      <h1>Create Todo</h1>
      <form onSubmit={() => _handleSubmit()}>
        <div class="form-group">
          <label for="todoText">Todo</label>
          <input
            name="todoText"
            type="text"
            class="form-control"
            aria-describedby="todoHelp"
            placeholder="Enter todo"
          ></input>
        </div>

        <button className="btn btn-success" type="submit">
          Create Todo
        </button>
      </form>
    </div>
  );
};

export default NewTodoForm;
