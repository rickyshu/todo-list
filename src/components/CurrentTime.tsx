import styled from "styled-components";
import format from "date-fns/format";
import { useEffect, useState } from "react";
const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(
    format(new Date(), "HH:mm:ss")
  );
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(format(new Date(), "HH:mm:ss"));
    }, 1000);
    return () => clearInterval(timer);
  }, [currentTime]);
  return <Time>{currentTime}</Time>;
};

const Time = styled.div`
  width: 90%;
  height: 10rem;
  margin: 3rem;
  font-size: 8rem;
  text-align: center;
  font-weight: 800;
`;

export default CurrentTime;
