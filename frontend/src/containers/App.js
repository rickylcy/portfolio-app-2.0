import { Route, Routes } from "react-router";
import ResponsiveAppBar from "../components/Nav";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./Home";
import Weather from "./Weather";
import Shopping from "./Shopping";
import Feedback from '../components/home/Feedback.js'


function App() {
  const theme = createTheme({
    palette:{
      mode:"dark",
      
    primary: {
      main: '#fff',
    },
    secondary: {
      main: 'rgb(30, 190,214)',
    },
    background: {
      default: '#131415',
      paper: '#2b3031',
    },
    text: {
      secondary: '#adb0b1',
    },
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ResponsiveAppBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="portfolio-app-2.0" element={<Home />} />
          <Route path="Weather" element={<Weather />} />
          <Route path="Shopping" element={<Shopping />} />
          <Route path="Feedback" element={<Feedback />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}
export default App;
