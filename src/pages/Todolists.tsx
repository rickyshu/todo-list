import styled from "styled-components";
import AddTodo from "../components/AddTodoButton";
import TodoInput from "../components/TodoInput";
import DateInfo from "../components/DateInfo";
import RemainingTasks from "../components/TaskCounter";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { TodoActions } from "../store";
import Todo from "../components/Todo";
interface Task {
  id: string;
  input: string;
  accompolished: boolean;
}
const TodoLists = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(inputValue === "")) {
      const todo: Task = {
        id: uuidv4(),
        input: inputValue,
        accompolished: false,
      };
      dispatch(TodoActions.addTodo(todo)); //{type}
      setInputValue("");
    }
  };
  return (
    <Todos>
      <RemainingTasks />
      <DateInfo />
      <Form onSubmit={submitHandler}>
        {/* 여기에 이제 input이랑 기타 사항들을 받는다! */}
        <TodoInput inputValue={inputValue} setInputValue={setInputValue} />
        <Todo />
        <AddTodo />
      </Form>
    </Todos>
  );
};

const Todos = styled.div`
  border: 1px solid red;
  position: relative;
  box-sizing: border-box;
  margin-top: 15rem;
  width: 50rem;
  height: 100%;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.style.TodoBGColor};
  box-shadow: -8px 5px 19px -2px rgba(0, 0, 0, 0.73);
`;
const Form = styled.form`
  position: relative;
  margin: 3rem;
  height: 60rem;
  button {
    //위치상 자신을 기준으로 지정됨!
    position: absolute;
    top: 105%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default TodoLists;
