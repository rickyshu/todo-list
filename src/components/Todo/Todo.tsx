import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import styled from "styled-components";
import { deleteTodo, checkTodo } from "../../features/todo/TodoInputSlice";
import { BsFillTrashFill } from "react-icons/bs";

interface TextProp {
  accompolished: boolean;
}

const Todo = () => {
  const dispatch = useAppDispatch();
  const todoLists = useAppSelector((state) => state);
  const deleteEventHandler = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const checkBoxEventHandler = (id: string) => {
    dispatch(checkTodo(id));
  };

  return (
    <ShowTodo>
      {todoLists.length !== 0
        ? todoLists.map((todo, index) => {
            return (
              <Item key={index}>
                <Label>
                  <InputCheckbox type="checkbox" onChange={() => checkBoxEventHandler(todo.id)} />
                  <Text accompolished={todo.accompolished}>{todo.input}</Text>
                </Label>
                <TrashIcons onClick={() => deleteEventHandler(todo.id)} />
              </Item>
            );
          })
        : null}
    </ShowTodo>
  );
};

const ShowTodo = styled.ul`
  padding: 1.3rem;
  width: 100%;
  height: 29rem;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Item = styled.li`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  background-color: ${(props) => props.theme.style.backgroundColor};
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const InputCheckbox = styled.input`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

const Text = styled.p<TextProp>`
  font-size: 30px;
  word-break: break-word;
  text-decoration: ${(props) => (props.accompolished ? "line-through" : "none")};
`;

const TrashIcons = styled(BsFillTrashFill)`
  font-size: 2rem;
  flex-shrink: 0;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
export default Todo;
