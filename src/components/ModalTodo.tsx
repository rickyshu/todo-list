import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState, TodoActions } from "../store";
import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore/lite";
import { db } from "../fbase";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalTodo = ({ isOpen, onClose, children }: ModalProps) => {
  const [comfirm, setComfirm] = useState<boolean>(false);
  const todoLists = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    //firebase에 정보를 저장하기!
    //처음 호출할 때 안 부르도록 하는 것은 어떻게 해결하나?
    console.log(todoLists);
    addDoc(collection(db, "todolist-01"), {
      ...todoLists,
    });

    dispatch(TodoActions.resetTodo());
  }, [comfirm, todoLists, dispatch]);

  const clickEventHandler = () => {
    setComfirm((preval) => !preval);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <ModalWrapper onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
        <YesButton onClick={clickEventHandler}>YES</YesButton>
        <NoButton>No</NoButton>
      </ModalContent>
    </ModalWrapper>
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
