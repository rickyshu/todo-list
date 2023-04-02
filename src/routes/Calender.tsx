import styled from "styled-components";
import CalenderHeader from "../components/CalenderHeader";
import { format, addMonths, subMonths } from "date-fns";
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
  return (
    <CalenderInfo>
      <CalenderHeader
        currentMonth={currentMonth}
        preMonth={preMonth}
        nextMonth={nextMonth}
      ></CalenderHeader>
      <div className="header">Header</div>
      <div className="days">Days</div>
      <div className="body">Cells</div>
    </CalenderInfo>
  );
};
//calender 전체 크기를 지정한다.
const CalenderInfo = styled.section`
  width: 50rem;
  height: 10rem;
  outline: 2px dotted black;
`;

export default Calender;
