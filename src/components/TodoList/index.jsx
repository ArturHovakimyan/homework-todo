import React from "react";
import { ACTION_TODO } from "../Reducer";

const TodoList = ({ id, title, editMode, dispatch }) => {
  return (
    <div>
      <div className="todoList">
        {id === editMode.todoId ? (
          <div>
            <input
              type="text"
              value={editMode.editidTodo}
              onChange={(e) =>
                dispatch({
                  type: ACTION_TODO.EDITID_TODO,
                  payload: { title: e.target.value },
                })
              }
            />
            <button
              onClick={() =>
                dispatch({
                  type: "EDIT",
                  payload: { id: null, title: "" },
                })
              }
            >
              X
            </button>
            <button
              onClick={() =>
                dispatch({ type: ACTION_TODO.COMPLETE_TODO, payload: { id } })
              }
            >
              V
            </button>
          </div>
        ) : (
          <div>
            {title}
            <button
              onClick={() =>
                dispatch({ type: ACTION_TODO.EDIT, payload: { id, title } })
              }
            >
              Edit
            </button>
            <button
              onClick={() =>
                dispatch({ type: ACTION_TODO.DELETE, payload: { id } })
              }
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
