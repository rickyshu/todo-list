import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState, TodoActions } from "../store";
import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore/lite";
import { db } from "../fbase";
import { connect } from "http2";
//여기에서 ensure 버튼을 클릭하게 되면, 정보들이 다 firebase에 추가된다.
//그러면 새로운 firebase의 정보를 기반으로
const Comfirm = () => {
  const [comfirm, setComfirm] = useState<boolean>(false);
  const todoLists = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  //useEffect을 사용해서 비동기처리를 하고 싶다!

  useEffect(() => {
    //firebase에 정보를 저장하기!
    console.log(todoLists);
    addDoc(collection(db, "todolist-01"), {
      ...todoLists,
    });

    dispatch(TodoActions.resetTodo());
  }, [comfirm, todoLists, dispatch]);

  const clickEventHandler = () => {
    setComfirm((preval) => !preval);
  };

  return <ComfirmBotton onClick={clickEventHandler}>End The Day</ComfirmBotton>;
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
