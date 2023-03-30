import styled from "styled-components";
import { Theme } from "../constants/constant";
import { ThemeButton } from "../components/ThemeButton";
import { BsFillSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
interface setThemeProps {
  themeMode: string;
  setThemeMode: React.Dispatch<React.SetStateAction<string>>;
}

//React.FC의 경우 children이 자동적으로 생성되기 때문에 default 사용이 원활하지 않음!
const Header = ({ themeMode, setThemeMode }: setThemeProps) => {
  //밑에 modal을 구현해서 처리하면 될듯하다!
  //다크모드/라이트모드 관리하기!
  const themeHandler = () => {
    // console.log("change theme is working");
    if (themeMode === Theme.LightTheme) {
      setThemeMode(Theme.DarkTheme);
    } else {
      setThemeMode(Theme.LightTheme);
    }
  };
  return (
    <HeaderInfo>
      <div className="container">
        <nav>
          <ul>
            <li>
              <a href="/">Task Organizer</a>
            </li>
            <li>
              {/* 가능하면 아이콘 등을 추가해서 처리해라! */}
              <ThemeButton onClick={themeHandler}>
                {themeMode === Theme.LightTheme ? (
                  <LightTheme />
                ) : (
                  <DarkTheme />
                )}
                ;
              </ThemeButton>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderInfo>
  );
};
// const flexCenter = css`
//   display: flex;
// `;
const HeaderInfo = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 124px;
  border-bottom: 1px solid ${(props) => props.theme.style.backgroundColor};
  background-color: var(--bluish-gray-900);
  & ul {
    display: flex;
    text-align: center;
    > li a {
      position: absolute;
      font-weight: bold;
      top: 2rem;
      left: 2rem;
      font-size: 4rem;
      color: var(--bluish-gray-10);
    }
  }
`;
const LightTheme = styled(BsFillSunFill)`
  font-size: 3rem;
`;
const DarkTheme = styled(MdDarkMode)`
  font-size: 3rem;
`;

export default Header;
