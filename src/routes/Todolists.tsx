import styled from "styled-components";
import AddTodo from "../components/Todo/AddTodoButton";
import TodoInput from "../components/Todo/TodoInput";
import DateInfo from "../components/Todo/DateInfo";
import RemainingTasks from "../components/Todo/TaskCounter";
import CurrentTime from "../components/Todo/CurrentTime";
import Comfirm from "../components/Todo/Comfirm";
import Nav from "../pages/Nav";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/TodoInputSlice";
import Todo from "../components/Todo/Todo";

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
      dispatch(addTodo(todo));
      setInputValue("");
    }
  };
  return (
    <>
      <Nav />
      <CurrentTime />
      <Todos>
        <RemainingTasks />
        <DateInfo />
        <Form onSubmit={submitHandler}>
          <TodoInput inputValue={inputValue} setInputValue={setInputValue} />
          <Todo />
          <AddTodo />
        </Form>
        <Comfirm />
      </Todos>
    </>
  );
};

const Todos = styled.div`
  border: 1px solid red;
  position: relative;
  box-sizing: border-box;
  margin-top: 2rem;
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
  flex-grow: 1;
  button {
    //위치상 자신을 기준으로 지정됨!
    position: absolute;
    top: 105%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default TodoLists;
