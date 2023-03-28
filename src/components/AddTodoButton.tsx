import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

const AddButton = styled.button`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  background-color: ${(props) => props.theme.style.AddButtonColor};
  box-shadow: -8px 5px 19px -2px rgba(0, 0, 0, 0.36);
`;
const AddIcons = styled(FaPlus)`
  font-size: 3.1rem;
  color: ${(props) => props.theme.style.backgroundColor};
`;
//1.만약에 Input과 click 이벤트가 분리 불가라면, 따로 처리를 해야 할 것이다.
//2. 혹은 실시간으로 Input의 value를 받아서, 계속 업데이틀 해주다가, click을 누른 순간
//해당 값을 받아오는 형태로 코드를 작성해도 될듯!
const AddTodo = () => {
  const InputHandler = () => {
    //여기에서 Input에 있는 값을 받아오면 된다!
  };
  return (
    <AddButton onClick={InputHandler}>
      <AddIcons />
    </AddButton>
  );
};

export default AddTodo;
