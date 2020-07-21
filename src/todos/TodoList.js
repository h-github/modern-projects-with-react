import React, { useEffect } from "react";
import { connect } from "react-redux";

import TododListItem from "./TododListItem";
import NewTodoForm from "./NewTodoForm";
import { loadTodos, removeTodoRequest, markTodoAsCompeleted } from "./thunks";
import { getTodos, getTodosLoading } from "./selectors";

const TodoList = ({
  todos = [],
  isLoading = false,
  onDeletePressed,
  onCompletedPressed,
  statrtLoadingTodos,
}) => {
  useEffect(() => {
    statrtLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading todos...</div>;
  const content = (
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

  return <>{isLoading ? loadingMessage : content}</>;
};

const mapStateToProps = state => ({
  todos: getTodos(state),
  isLoading: getTodosLoading(state),
});
const mapDispatchToProps = dispatch => ({
  onDeletePressed: id => dispatch(removeTodoRequest(id)),
  onCompletedPressed: id => dispatch(markTodoAsCompeleted(id)),
  statrtLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
