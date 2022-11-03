import React, { useReducer } from "react";
import InputTodo from "../InputTodo";
import TodoList from "../TodoList";
import { reducer, initialState } from "../Reducer"



const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="todo">
      <InputTodo dispatch={dispatch} {...state} />
      {state.todos.map((todo) => (
        <TodoList
          id={todo.id}
          key={todo.id}
          dispatch={dispatch}
          title={todo.inputValue}
          editMode={state.editMode}
        />
      ))}
    </div>
  );
};

export default Todo;
