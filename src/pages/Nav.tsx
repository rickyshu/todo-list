import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { SlNotebook } from "react-icons/sl";
import { BsChatSquareQuote } from "react-icons/bs";
//밑에 누르면 나오도록 설정하면 될듯
const Nav = () => {
  return (
    <NavBar>
      <Link to={"/calender"}>
        <CalenderIcon />
      </Link>
      <Diary />
      <WiseSaying />
    </NavBar>
  );
};
const CommonStyleIcons = css`
  margin: 3rem;
  font-size: 5rem;
`;
const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50rem;
  height: 15rem;
  border-radius: 4rem;
  margin-top: 5rem;
  border: 1px solid red;
`;
const CalenderIcon = styled(SlCalender)`
  ${CommonStyleIcons};
`;

const Diary = styled(SlNotebook)`
  ${CommonStyleIcons};
`;

const WiseSaying = styled(BsChatSquareQuote)`
  ${CommonStyleIcons};
`;
export default Nav;
