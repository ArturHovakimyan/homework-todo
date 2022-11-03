import React from "react";

const InputTodo = ({ inputValue, dispatch }) => {
  return (
    <div className="InputTodo">
      <input
        type="text"
        value={inputValue}
        onChange={(e) =>
          dispatch({
            type: "INPUT_VALUE",
            payload: { inputValue: e.target.value },
          })
        }
      />
      <button disabled={!inputValue.trim()} onClick={() => dispatch({type: "ADD_TODO"})}>Add</button>
    </div>
  );
};

export default InputTodo;
