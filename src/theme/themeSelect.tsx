import { Theme } from "../constants/constant";
import { DefaultTheme } from "styled-components";
//styled-components 안에 있는 DefaultTheme을 자체적으로 지정해주는 것!
//여기에 계속 지정을 해줘여 함
declare module "styled-components" {
  export interface DefaultTheme {
    value: string;
    style: {
      backgroundColor: string;
      color: string;
      TodoBGColor: string;
      AddButtonColor: string;
      CalenderOutline: string;
      CalenderDayColor: string;
      CalenderCellcolor: string;
      CalenderButton: string;
      CalenderHover: string;
      CalenderToday: string;
    };
  }
}
export const lightTheme: DefaultTheme = {
  value: Theme.LightTheme,
  style: {
    backgroundColor: "#ffffff",
    color: "#343a40",
    TodoBGColor: "#ffcead",
    AddButtonColor: "#47ffb2;",
    CalenderOutline: "#ff9b85;",
    CalenderDayColor: "#ffcead",
    CalenderCellcolor: "#a3a3a3;",
    CalenderButton: "#141414;",
    CalenderHover: "#ffcead",
    CalenderToday: "#ff9b85",
  },
};

export const darkTheme: DefaultTheme = {
  value: Theme.DarkTheme,
  style: {
    backgroundColor: "#343a40",
    color: "#ffffff",
    TodoBGColor: "#667ba3",
    AddButtonColor: "#141414",
    CalenderOutline: "#173ea1;",
    CalenderDayColor: "#667ba3",
    CalenderCellcolor: "#a3a3a3",
    CalenderButton: "#ccd3e0;",
    CalenderHover: "#5e85e8",
    CalenderToday: "#0d2259;",
  },
};
