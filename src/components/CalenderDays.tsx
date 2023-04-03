import styled from "styled-components";

const CalenderDay = () => {
  const days: JSX.Element[] = [];
  const date = ["Sun", "Mon", "Thu", "Wed", "Thrs", "Fri", "Sat"];

  date.forEach((date, idx) => {
    days.push(
      <div className="col" key={idx}>
        {date}
      </div>
    );
  });

  return <Days className="days row">{days}</Days>;
};

const Days = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 15%;
  outline: 1px solid green;

  .col {
    flex: 1;
    background-color: ${(props) => props.theme.style.calenderDayColor};
    border-radius: 10rem;
    text-align: start;
    padding-left: 1rem;
    padding-top: 0.2rem;
  }
`;

export default CalenderDay;
