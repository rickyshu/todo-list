import { format } from "date-fns";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import styled, { css } from "styled-components";
interface props {
  currentMonth: Date;
  preMonth: () => void;
  nextMonth: () => void;
}

const CalenderHeader = ({ currentMonth, preMonth, nextMonth }: props) => {
  return (
    <HeaderRow>
      <div className="col-start">
        <span className="text">
          <span className="month">{format(currentMonth, "M")}월</span>
          {format(currentMonth, "yyyy")}
        </span>
      </div>
      <div className="col-end">
        <ArrowRight className="arrow-right" onClick={preMonth} />
        <ArrowLeft className="arrow-left" onClick={nextMonth} />
      </div>
    </HeaderRow>
  );
};

const HeaderRow = styled.section`
  position: relative;
  width: 100%;
  height: 3rem;
  display: flex;
  .text {
    margin-left: 1rem;
    position: absolute;
    bottom: 0.2rem;
  }
  .month {
    font-size: 1.5rem;
    font-weight: 800;
  }
  .col-start {
    flex: 5;
  }
  .col-end {
    position: relative;
    top: 1rem;
    left: 0.5rem;
    flex: 0.5;
  }
`;
const commonStyleIcons = css`
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0.2rem;
  &:hover {
    font-size: 1.8rem;
    color: ${(prop) => prop.theme.style.CalenderButton};
  }
`;

const ArrowLeft = styled(BsFillArrowRightCircleFill)`
  ${commonStyleIcons}
`;

const ArrowRight = styled(BsFillArrowLeftCircleFill)`
  ${commonStyleIcons}
`;

export default CalenderHeader;
