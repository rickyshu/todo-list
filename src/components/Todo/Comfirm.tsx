import styled from "styled-components";
import ModalTodo from "./ModalTodo";
import { useState } from "react";
import { UiStrings } from "../../constants/constant";

//여기에서 ensure 버튼을 클릭하게 되면, 정보들이 다 firebase에 추가된다.
//그러면 새로운 firebase의 정보를 기반으로
const Comfirm = () => {
  const [isOpen, setIsOpen] = useState(false);
  //useEffect을 사용해서 비동기처리를 하고 싶다!

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ComfirmBotton onClick={toggleModal}>End The Day</ComfirmBotton>
      <ModalTodo isOpen={isOpen} onClose={toggleModal}>
        <p>{UiStrings.ModalString}</p>
      </ModalTodo>
    </>
  );
};

const ComfirmBotton = styled.button`
  width: 9rem;
  height: 3rem;
  border-radius: 0.5rem;
  position: absolute;
  right: 41%;
  bottom: 5rem;
  font-size: 1rem;
  font-weight: 900;
`;

export default Comfirm;
