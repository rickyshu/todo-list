import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { RootState, TodoActions } from "../store";
import { BsFillTrashFill } from "react-icons/bs";
import { useState } from "react";
const Todo = () => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const todoLists = useSelector((state: RootState) => state);
  const deleteEventHandler = (id: number) => {
    dispatch(TodoActions.deleteTodo(id));
  };
  const checkBoxEventHandler = (id: number) => {
    //체크되면 text-decoration:line-through로 변경해야 하는데
    //조금 더 고민이 필요할듯!
  };
  return (
    <ShowTodo>
      {todoLists.length !== 0
        ? todoLists.map((todos, idx) => {
            return (
              <div className="todo_content" key={idx}>
                <ul>
                  <li>{todos.input}</li>
                  <CheckBox
                    type={"checkbox"}
                    checked={isChecked}
                    onChange={() => todos.id}
                  />
                  <TrashIcons onClick={() => deleteEventHandler(todos.id)} />
                </ul>
              </div>
            );
          })
        : null}
    </ShowTodo>
  );
};
const ShowTodo = styled.div`
  overflow: auto;
  width: 100%;
  height: 29rem;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  .todo_content {
    position: relative;
    margin-top: 1rem;
    box-sizing: border-box;
    display: flex;
    border: 1px solid black;
    border-radius: 1rem;
    width: 100%;
    height: 5.5rem;
    background-color: ${(props) => props.theme.style.backgroundColor};
    & > ul {
      padding: 1rem;
      font-size: 2.2rem;
      font-weight: 900;
    }
  }
`;
//가능하면 font styling까지 진행하기! => 더 다양한 시도를 해봐라!
//그리고 일단 밑 아이콘들을 클릭 시 삭제 되는 것까지 구현을 다 해놓고
//스타일링을 하던지 하던가 해라!
//
const TrashIcons = styled(BsFillTrashFill)`
  font-size: 2rem;
  position: absolute;
  top: 50%;
  right: 5%;
  cursor: pointer;
  transform: translate(-50%, -50%);
  &:hover {
    color: red;
    animation: shaking 0.5s;
  }

  @keyframes shaking {
    0% {
      transform: translate(-50%, -50%);
    }
    25% {
      transform: translate(-35%, -50%);
    }
    75% {
      transform: translate(-65%, -50%);
    }
    100% {
      transform: translate(-50%, -50%);
    }
  }
`;
const CheckBox = styled.input`
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  position: absolute;
  top: 46.75%;
  right: 18.3%;
  transform: translate(-50%, -50%);
`;
export default Todo;
