import styled from "styled-components";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
const WetherInfo = () => {
  const todoLists = useSelector((state: RootState) => state);
  const TasksLeft = todoLists.filter((todo) => {
    return !todo.accompolished;
  });
  return (
    <RemainingTasks>
      <div className="title">Tasks Remain</div>
      <div className="tasksCounter">
        {TasksLeft.length === 0 ? "No Tasks" : TasksLeft.length}
      </div>
    </RemainingTasks>
  );
};

const RemainingTasks = styled.section`
  position: absolute;
  right: 5%;
  top: 6%;
  width: 40%;
  height: 10%;
  .title {
    text-align: center;
    font-size: 3rem;
    font-weight: 800;
  }
  .tasksCounter {
    margin-top: 2rem;
    font-size: 4.5rem;
    text-align: center;
  }
`;
export default WetherInfo;
