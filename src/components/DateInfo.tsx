import styled from "styled-components";
import { format } from "date-fns";
const DateInfo = () => {
  return (
    <LocalDate>
      <div id="day">{format(new Date(), "d")}</div>
      <div id="month-Year">
        <span id="month">{format(new Date(), "MMM")}</span>
        <span id="year">{format(new Date(), "YYY")}</span>
      </div>
      <div id="day-Of-Week">{format(new Date(), "EE")}</div>
    </LocalDate>
  );
};
const LocalDate = styled.div`
  display: flex;
  position: absolute;
  margin: 4rem;
  width: 40%;
  height: 25%;
  font-size: 2.5rem;
  #day {
    font-weight: 900;
    font-size: 6.5rem;
    margin-right: 0.8rem;
  }
  #month-Year {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    & > #month {
      font-weight: 500;
    }
    & > #year {
      font-weight: 300;
    }
  }
  #day-Of-Week {
    position: absolute;
    font-size: 4.5rem;
    bottom: 4rem;
    right: 53%;
  }
`;
export default DateInfo;
