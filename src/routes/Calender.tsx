import styled from "styled-components";
import CalenderHeader from "../components/CalenderHeader";
import CalenderDay from "../components/CalenderDays";
import CalenderCells from "../components/CalenderCells";
import { format, addMonths, subMonths } from "date-fns";
import { useState } from "react";
const Calender = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  console.log(typeof format(new Date(), "d"));
  const preMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  //타입 명시를 해줘야 한다.
  const onDateClick = (day: Date) => {
    setSelectedDate(day);
  };

  return (
    <CalenderInfo>
      <CalenderHeader
        currentMonth={currentMonth}
        preMonth={preMonth}
        nextMonth={nextMonth}
      ></CalenderHeader>
      <CalenderDay />
      <CalenderCells
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        onDateClick={onDateClick}
      />
    </CalenderInfo>
  );
};
//calender 전체 크기를 지정한다.
const CalenderInfo = styled.section`
  width: 66rem;
  height: 55rem;
  //변경해야 할 부분이다.
  outline: 0.25rem solid ${(prop) => prop.theme.style.CalenderOutline};
  border-radius: 2rem;
`;

export default Calender;
