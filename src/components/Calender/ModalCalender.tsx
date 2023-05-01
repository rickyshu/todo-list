import styled, { css } from "styled-components";
import { FaRegCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";

interface Task {
  input: string;
  accompolished: boolean;
  id: string;
}

type FireBaseDataArray = Task[];

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalData: FireBaseDataArray;
}

const ModalCalender = ({ isOpen, onClose, modalData }: ModalProps) => {
  console.log(modalData);
  return (
    <>
      {isOpen && (
        <ModalWrapper onClick={onClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ul className="todo-lists">
              {modalData.map((el, index) => {
                return (
                  <li key={index} className="todo-list">
                    {el.input} {el.accompolished ? <Success /> : <Fail />}
                  </li>
                );
              })}
            </ul>
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  width: 40rem;
  height: 20rem;
  background-color: ${(props) => props.theme.style.backgroundColor};
  color: ${(props) => props.theme.style.color};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  font-weight: 800;
  overflow-y: auto;

  border: 3px solid red;
  .todo-list {
    display: flex;
    width: 100%;
    margin: 1rem 0;
    justify-content: space-between;
  }
  .todo-lists {
    box-sizing: border-box;
    margin: 3rem;
    padding: 2rem;
  }
  ::-webkit-scrollbar {
    width: 2px;
  }
`;
const CommonIconStyle = css`
  margin-left: 1rem;
`;

const Success = styled(FaRegCircle)`
  ${CommonIconStyle}
  color:green;
`;

const Fail = styled(ImCross)`
  ${CommonIconStyle}
  color:red;
`;

export default ModalCalender;
