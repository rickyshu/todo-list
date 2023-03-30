import styled from "styled-components";
import { RootState, TodoActions } from "../store";
import { useSelector } from "react-redux";
const WetherInfo = () => {
  const todoLists = useSelector((state: RootState) => state);
  const TasksLeft = todoLists.filter((todo) => {
    return !todo.accompolished;
  });
  return (
    <RemainingTasks>
      <div>
        Tasks Remain
        <div className="tasksCounter">{TasksLeft.length}</div>
      </div>
    </RemainingTasks>
  );
};

const RemainingTasks = styled.section`
  position: absolute;
  right: 10%;
  top: 10%;
  width: 23%;
  height: 10%;
  border: 2px solid green;
`;
export default WetherInfo;
