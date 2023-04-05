import { createSlice, configureStore } from "@reduxjs/toolkit";
import { ActionType } from "../constants/constant";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
//Toolkit을 사용하는 이유: 입력한 값을 받고 그것을 상태 변경하기 위해서
//내부에 각 todos의 객체를 받아서 처리를 한다.
interface Todo {
  id: number;
  input: string;
  accompolished: boolean;
}
//받아 오는 것까지 성공을 했다.
//추가적인 작동을 진행해야 한다.
//저 input의 크기를 조금 더 늘리고,
//날씨 정보를 넣고!
//thunk
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
//밑과 같이 하면 액션 객체가 생성됨(우리가 굳이 따로 만들 필요가 없음!);
//createSlice의 자체적인 actions props를 제공함
//actions을 통해 구현해 놓은 각 메서드에 접근이 가능하다!
// TodoInputSlice.actions.addTodo();

const store = configureStore({
  reducer: TodoInputSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
//action 객체 전체를 export하는 것이다! 밑에 있는 내용들을 다 파악해야 한다.
export const TodoActions = TodoInputSlice.actions;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
