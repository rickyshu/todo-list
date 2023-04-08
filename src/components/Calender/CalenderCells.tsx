import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { isSameMonth, isSameDay, addDays, parse, format } from "date-fns";
import { db } from "../../fbase";
import { getDocs, collection } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { FirbaseID } from "../../constants/constant";
import { FaRegCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import styled, { css } from "styled-components";

interface Props {
  currentMonth: Date;
  selectedDate: Date;
  onDateClick: (day: Date) => void;
}

interface FireBaseDate {
  [key: string]: any; //추가로 확인해야 함
}
interface CheckingDateParams {
  currentMonth: Date;
  currentDay: Date;
}

const CalenderCells = ({ currentMonth, selectedDate, onDateClick }: Props) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  //redux-toolkit thunk로 받아오는 것으로 변경할 필요 존재!
  const [fireBaseData, setFireBaseDate] = useState<FireBaseDate>({});

  //해당 날짜에 관련된 Todo의 존재 여부를 확인하는 함수
  const containData = ({
    currentMonth,
    currentDay,
  }: CheckingDateParams): boolean => {
    const month = format(currentMonth, "MM");
    const day = format(currentDay, "dd");
    const year = format(currentMonth, "yyyy");
    if (Object.keys(fireBaseData).includes(`${year}${month}${day}`)) {
      const checkedDate = parse(
        `${year}${month}${day}`,
        "yyyyMMdd",
        new Date()
      );
      return (
        isSameMonth(checkedDate, currentMonth) &&
        isSameDay(checkedDate, currentDay)
      );
    }
    return false;
  };

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  useEffect(() => {
    getDateFromFireBase();
  }, []);

  //Todo 전체 성공 여부를 검증하는 함수
  const accomplisedTheTasks = ({
    currentMonth,
    currentDay,
  }: CheckingDateParams) => {
    const month = format(currentMonth, "MM");
    const day = format(currentDay, "dd");
    const year = format(currentMonth, "yyyy");
    if (Object.keys(fireBaseData).length !== 0) {
      const Value = fireBaseData[`${year}${month}${day}`];
      const notNested = Object.keys(Value).includes("accomplished");
      if (notNested) {
        if (Value["accomplished"] === false) return false;
      } else {
        for (let key in Value) {
          if (Value[key].accompolished === false) return false;
        }
      }
    }
    return true;
  };
  const getDateFromFireBase = async () => {
    const docRef = collection(db, FirbaseID.Id);
    const docSnap = await getDocs(docRef);
    const dataObj: FireBaseDate = {};
    if (docSnap) {
      docSnap.forEach((doc) => {
        dataObj[doc.id] = doc.data();
      });
      setFireBaseDate(dataObj);
    }
  };

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");

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
          } ${format(new Date(), "yyyy/MM/dd")}`}
          key={day.toString()}
        >
          <span
            className={
              format(currentMonth, "M") !== format(day, "M")
                ? "text not-valid"
                : ""
            }
          >
            {formattedDate}
            {!containData({
              currentMonth,
              currentDay: day,
            }) ? null : accomplisedTheTasks({
                currentMonth,
                currentDay: day,
              }) ? (
              <Complete />
            ) : (
              <NotComplete />
            )}
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
    position: relative;
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
const CommonIconStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
`;
const Complete = styled(FaRegCircle)`
  ${CommonIconStyle};
  color: green;
`;
const NotComplete = styled(ImCross)`
  ${CommonIconStyle};
  color: red;
`;
export default CalenderCells;
