import React, { useEffect } from "react";
import { connect } from "react-redux";

import TododListItem from "./TododListItem";
import NewTodoForm from "./NewTodoForm";
import { loadTodos, removeTodoRequest, markTodoAsCompeleted } from "./thunks";
import {
  getTodosLoading,
  getCompleteTodos,
  getIncompleteTodos,
} from "./selectors";

const TodoList = ({
  completedTodos = [],
  incompletedTodos = [],
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
      {incompletedTodos.length > 0 && <h3>Incompleted Todos</h3>}
      {incompletedTodos.map((todo, index) => (
        <TododListItem
          key={index}
          todo={todo}
          onDeletePressed={onDeletePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
      {completedTodos.length > 0 && <h3>Completed Todos</h3>}
      {completedTodos.map((todo, index) => (
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
  completedTodos: getCompleteTodos(state),
  incompletedTodos: getIncompleteTodos(state),
  isLoading: getTodosLoading(state),
});
const mapDispatchToProps = dispatch => ({
  onDeletePressed: id => dispatch(removeTodoRequest(id)),
  onCompletedPressed: id => dispatch(markTodoAsCompeleted(id)),
  statrtLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
