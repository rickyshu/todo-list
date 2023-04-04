import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { isSameMonth, isSameDay, addDays, parse, format } from "date-fns";
import styled from "styled-components";

interface props {
  currentMonth: Date;
  selectedDate: Date;
  onDateClick: (day: Date) => void;
}

const CalenderCells = ({ currentMonth, selectedDate, onDateClick }: props) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      const cloneDay = day;

      days.push(
        <div
          className={`col cell ${
            !isSameMonth(day, monthStart)
              ? "disabled"
              : isSameDay(day, selectedDate)
              ? "selected"
              : format(currentMonth, "M") !== format(day, "M")
              ? "not-valid"
              : "valid"
          }`}
          key={day.toString()}
          //parse의 역할을 정확히 분석해야 한다.
          onClick={() => onDateClick(parse("yy", "yy", cloneDay))}
        >
          <span
            className={
              format(currentMonth, "M") !== format(day, "M")
                ? "text not-valid"
                : ""
            }
          >
            {formattedDate}
          </span>
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className="row" key={day.toString()}>
        {days}
      </div>
    );
    days = [];
  }
  console.log(rows);
  return <Cells className="body">{rows}</Cells>;
};

const Cells = styled.section`
  //위는 고정되고 밑만 변경되도록 css를 변경해야 한다.
  //이거 오늘 마무리하고 TS 좀 작성하고 내일 과목을 준비하자.
  .row {
    width: 100%;
    height: 8rem;
    display: flex;
  }
  .col {
    width: 9rem;
    height: 7.5rem;
    border-radius: 0.3rem;
    border: 1.5px solid ${(prop) => prop.theme.style.CalenderCellcolor};
    margin: 0 0.2rem;
    &:hover {
      background-color: ${(prop) => prop.theme.style.CalenderHover};
    }
    & span {
      margin: 0.4rem;
    }
  }
  .not-valid {
    opacity: 0.5;
  }
  .valid {
    font-weight: 700;
  }
  .selected {
    background-color: ${(prop) => prop.theme.style.CalenderToday};
  }
`;

export default CalenderCells;
