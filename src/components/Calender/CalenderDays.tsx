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
  height: 2rem;
  margin: 0.3rem 0;

  .col {
    flex: 1;
    background-color: ${(props) => props.theme.style.CalenderDayColor};
    border-radius: 10rem;
    text-align: start;
    padding-left: 1rem;
    padding-top: 0.2rem;
  }
`;

export default CalenderDay;
