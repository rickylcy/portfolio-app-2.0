import { Route, Routes } from "react-router";
import ResponsiveAppBar from "../components/Nav";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./Home";
import Weather from "./Weather";

function App() {
  const theme = createTheme();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Weather" element={<Weather />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}
export default App;
