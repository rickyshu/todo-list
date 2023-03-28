import GlobalStyles from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme/themeSelect";
import { useState } from "react";
import { Theme } from "./constants/constant";
import Header from "./pages/Header";
import TodoLists from "./components/Todolists";
function App() {
  const [themeMode, setThemeMode] = useState<string>(Theme.LightTheme);
  const theme = themeMode === Theme.LightTheme ? lightTheme : darkTheme;
  //Router를 만들어서 진행해라!
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header themeMode={themeMode} setThemeMode={setThemeMode} />
        <TodoLists />
      </ThemeProvider>
    </>
  );
}

export default App;
