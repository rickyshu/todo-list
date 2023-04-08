import styled from "styled-components";
import CalenderHeader from "../components/Calender/CalenderHeader";
import CalenderDay from "../components/Calender/CalenderDays";
import CalenderCells from "../components/Calender/CalenderCells";
import { addMonths, subMonths } from "date-fns";
import { useState } from "react";
const Calender = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const preMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  const onDateClick = (day: Date) => {
    console.log(day, "onDateClick");
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
  outline: 0.25rem solid ${(prop) => prop.theme.style.CalenderOutline};
  border-radius: 2rem;
`;

export default Calender;
