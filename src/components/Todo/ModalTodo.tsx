import styled, { css } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { doc, setDoc } from "firebase/firestore/lite";
import { db } from "../../fbase";
import { resetTodo } from "../../features/todo/TodoInputSlice";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalTodo = ({ isOpen, onClose, children }: ModalProps) => {
  const [comfirm, setComfirm] = useState<boolean>(false);
  const todoLists = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const saveDateToFirebase = async () => {
      if (todoLists.length !== 0) {
        await setDoc(
          doc(db, "todolist-01", `${format(new Date(), "yyyyMMdd")}`),
          {
            ...todoLists,
          }
        );
      }
      dispatch(resetTodo());
    };
    saveDateToFirebase();
  }, [comfirm, dispatch]);

  const clickEventHandler = () => {
    console.log(format(new Date(), "yyyyMMdd"));
    onClose();
    setComfirm((preval) => !preval);
  };

  return (
    <>
      {isOpen && (
        <ModalWrapper onClick={onClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            {children}
            <YesButton
              onClick={(e) => {
                clickEventHandler();
              }}
            >
              YES
            </YesButton>
            <NoButton onClick={onClose}>No</NoButton>
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
  position: relative;
  width: 40rem;
  height: 20rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  font-size: 1.4rem;
  font-weight: 800;
`;

const commonButtonStyle = css`
  width: 5rem;
  height: 3rem;
  font-weight: 800;
  font-size: 1.4rem;
  position: absolute;
  top: 70%;
`;

const YesButton = styled.button`
  ${commonButtonStyle}
  left: 30%;
`;

const NoButton = styled.button`
  ${commonButtonStyle}
  right:30%;
`;

export default ModalTodo;
