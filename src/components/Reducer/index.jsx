export const ACTION_TODO = {
    EDIT: "EDIT",
    DELETE: "DELETE",
    ADD_TODU: "ADD_TODO",
    EDITID_TODO: "EDITID_TODO",
    INPUT_VALUE: "INPUT_VALUE",
    COMPLETE_TODO: "COMPLETE_TODO",
  };
 export const initialState = {
    inputValue: "",
    todos: [],
    editMode: {},
  };
  
 export const reducer = (state, action) => {
    switch (action.type) {
      case ACTION_TODO.INPUT_VALUE: {
        return { ...state, inputValue: action.payload.inputValue };
      }
      case ACTION_TODO.ADD_TODU: {
        return {
          ...state,
          todos: [
            ...state.todos,
            { inputValue: state.inputValue, id: Math.random() },
          ],
          inputValue: "",
        };
      }
      case ACTION_TODO.DELETE: {
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload.id),
        };
      }
      case ACTION_TODO.EDIT: {
        return {
          ...state,
          editMode: {
            todoId: action.payload.id,
            editidTodo: action.payload.title,
          },
        };
      }
      case ACTION_TODO.EDITID_TODO: {
        return {
          ...state,
          editMode: { ...state.editMode, editidTodo: action.payload.title },
        };
      }
      case ACTION_TODO.COMPLETE_TODO: {
        return {
          ...state,
            todos: state.todos.map(todo => {
              if(todo.id === action.payload.id){
                  todo.inputValue = state.editMode.editidTodo
              }
              return todo
          }),
          editMode:{ todoId:null,  editidTodo: ""},
        };
      }
  
      default:
        return state;
    }
  };