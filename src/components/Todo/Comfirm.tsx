import styled from "styled-components";
import ModalTodo from "./ModalTodo";
import { useState } from "react";

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
        <p>확정하게 되면 수정이 불가능 합니다! 그대로 하시겠습니까?</p>
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
