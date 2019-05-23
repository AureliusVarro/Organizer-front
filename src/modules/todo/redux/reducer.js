import * as actionTypes from "./action-types";

export const initialState = {
  isOpenedAddTodoListDialog: false,
  isOpenedEditTodoListDialog: false,
  tempTodoList: { title: "New ToDo List" },
  currentTodoList: null,
  todoLists: [],
  activeTodos: [],
  doneTodos: [],
  currentTodo: null,
  UPD: false
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_ADD_TODOLIST_DIALOG:
      return {
        ...state,
        isOpenedAddTodoListDialog: !state.isOpenedAddTodoListDialog
      };

    case actionTypes.TOGGLE_EDIT_TODOLIST_DIALOG:
      return {
        ...state,
        isOpenedEditTodoListDialog: !state.isOpenedEditTodoListDialog
      };

    case actionTypes.UPDATE_CURRENT_TODOLIST:
      return { ...state, currentTodoList: action.payload, UPD: !state.UPD };

    case actionTypes.UPDATE_TEMP_TODOLIST:
      return { ...state, tempTodoList: action.payload, UPD: !state.UPD };

    case actionTypes.SAVE_TODOLISTS:
      return { ...state, todoLists: action.payload };

    case actionTypes.ADD_TODOLIST_SUCCESS:
      return { ...state, isOpenedAddTodoListDialog: false };

    case actionTypes.EDIT_TODOLIST_SUCCESS:
      return { ...state, isOpenedEditTodoListDialog: false };

    case actionTypes.DELETE_TODOLIST_SUCCESS:
      return { ...state, isOpenedEditTodoListDialog: false };

    case actionTypes.GET_TODOS_SUCCESS:
      let tempActiveTodos = [];
      let tempDoneTodos = [];
      if (action.payload[0])
        action.payload.map(item => {
          if (item.isDone) {
            tempDoneTodos.push(item);
          } else {
            tempActiveTodos.push(item);
          }
        });

      return {
        ...state,
        activeTodos: tempActiveTodos,
        doneTodos: tempDoneTodos
      };

    case actionTypes.UPDATE_CURRENT_TODO:
      return { ...state, currentTodo: action.payload, UPD: !state.UPD };

    default:
      return state;
  }
};

export default todos;
