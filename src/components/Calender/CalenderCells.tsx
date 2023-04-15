import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { isSameMonth, isSameDay, addDays, parse, format } from "date-fns";
import { db } from "../../fbase";
import { getDocs, collection } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { FirbaseID } from "../../constants/constant";
import { FaRegCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import ModalCalender from "./ModalCalender";
import styled, { css } from "styled-components";

interface Props {
  currentMonth: Date;
  selectedDate: Date;
}

interface Task {
  input: string;
  accomplished: boolean;
  id: string;
}

type FireBaseDataArray = Task[];

interface FireBaseDate {
  [key: string]: any; //추가로 확인해야 함
}
interface CheckingDateParams {
  currentMonth: Date;
  currentDay: Date;
}

const CalenderCells = ({ currentMonth, selectedDate }: Props) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<FireBaseDataArray>([]);
  //redux-toolkit thunk로 받아오는 것으로 변경할 필요 존재!
  const [fireBaseData, setFireBaseDate] = useState<FireBaseDate>({});
  //특정 날짜랑
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  //날짜에 해당하는 아이콘 클릭시 해당 날짜 데이터 저장하기
  const handleDays = (curDay: string, curMonth: Date) => {
    const month = format(curMonth, "MM");
    const year = format(curMonth, "yyyy");
    let propKey = `${year}${month}${curDay}`;
    console.log(propKey);
    console.log(curDay);
    if (propKey in fireBaseData) {
      setModalData(Object.values(fireBaseData[propKey]));
    }
  };

  //해당 날짜에 관련된 Todo의 존재 여부를 확인하는 함수
  const containData = ({ currentMonth, currentDay }: CheckingDateParams): boolean => {
    const month = format(currentMonth, "MM");
    const day = format(currentDay, "dd");
    const year = format(currentMonth, "yyyy");
    if (Object.keys(fireBaseData).includes(`${year}${month}${day}`)) {
      const checkedDate = parse(`${year}${month}${day}`, "yyyyMMdd", new Date());
      return isSameMonth(checkedDate, currentMonth) && isSameDay(checkedDate, currentDay);
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
  const accomplisedTheTasks = ({ currentMonth, currentDay }: CheckingDateParams) => {
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

  //firebase 데이터 호출(따로 hook을 만들 것)
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

  //달력 생성
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      let fireBaseDay = format(day, "dd");
      days.push(
        <div className={`col cell ${isSameDay(day, selectedDate) ? "selected" : format(currentMonth, "M") !== format(day, "M") ? "not-valid" : "valid"}`} key={day.toString()}>
          <span className={format(currentMonth, "M") !== format(day, "M") ? "not-valid" : ""} onClick={toggleModal}>
            {formattedDate}
            {!containData({
              currentMonth,
              currentDay: day,
            }) ? null : accomplisedTheTasks({
                currentMonth,
                currentDay: day,
              }) ? (
              //왜 한 숫자만 나오는지 이해가 안된다.
              <Complete className={format(day, "dd")} onClick={() => handleDays(fireBaseDay, currentMonth)} />
            ) : (
              <NotComplete onClick={() => handleDays(fireBaseDay, currentMonth)} />
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
  return (
    <>
      <Cells className="body">{rows}</Cells>
      <ModalCalender isOpen={isOpen} onClose={toggleModal} modalData={modalData}></ModalCalender>
    </>
  );
};

const Cells = styled.section`
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
