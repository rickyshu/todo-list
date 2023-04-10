import { createSlice } from "@reduxjs/toolkit";
import { ActionType } from "../../constants/constant";
interface Todo {
  id: number;
  input: string;
  accompolished: boolean;
}

const initialState: Todo[] = [];
const TodoInputSlice = createSlice({
  name: ActionType.Todo,
  initialState,
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    checkTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo !== undefined) {
        todo.accompolished = !todo.accompolished;
      }
    },
    deleteTodo(state, action) {
      const indexToDelete = state.findIndex(
        (todo) => todo.id === action.payload
      );
      if (indexToDelete !== -1) {
        state.splice(indexToDelete, 1);
      }
    },
    resetTodo(state) {
      while (state.length > 0) {
        state.pop();
      }
    },
  },
});

export const { addTodo, checkTodo, deleteTodo, resetTodo } =
  TodoInputSlice.actions;

export default TodoInputSlice.reducer;
