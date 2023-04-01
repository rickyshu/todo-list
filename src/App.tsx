import GlobalStyles from "./GlobalStyle";
import Header from "./pages/Header";
import TodoLists from "./routes/Todolists";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme/themeSelect";
import { useState } from "react";
import { Theme } from "./constants/constant";
function App() {
  const [themeMode, setThemeMode] = useState<string>(Theme.LightTheme);
  const theme = themeMode === Theme.LightTheme ? lightTheme : darkTheme;
  //Router를 만들어서 진행해라!
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header themeMode={themeMode} setThemeMode={setThemeMode} />
        <Routes>
          <Route path="/" element={<TodoLists />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
