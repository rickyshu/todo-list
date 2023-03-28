import { Theme } from "../constants/constant";
//styled-components 안에 있는 DefaultTheme을 자체적으로 지정해주는 것!
//여기에 계속 지정을 해줘여 함
declare module "styled-components" {
  export interface DefaultTheme {
    style: {
      backgroundColor: string;
      color: string;
      TodoBGColor: string;
      AddButtonColor: string;
    };
  }
}
//LightTheme일 때 Todo까지 밑에 다 지정을 해야 한다!
export const lightTheme = {
  value: Theme.LightTheme,
  style: {
    backgroundColor: "#ffffff",
    color: "#343a40",
    TodoBGColor: "#ffcead",
    AddButtonColor: "#47ffb2;",
  },
};

//DarkTheme일 때의 상황을 밑에 다 지정해야함!
export const darkTheme = {
  value: Theme.DarkTheme,
  style: {
    backgroundColor: "#343a40",
    color: "#ffffff",
    TodoBGColor: "#667ba3",
    AddButtonColor: "#141414",
  },
};
