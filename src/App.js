import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import { Box, createTheme, Stack, ThemeProvider} from "@mui/material";
import Navbar from "./components/Navbar";
import Add from './components/Add';
import { useState } from "react";
function App() {

  const [mode,setmode] = useState("light")
const darkTheme = createTheme({
  palette:{
    mode: mode,
  }
})
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"}  color={"text.primary"}>
      <Navbar />
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Sidebar setmode = {setmode} mode = {mode} />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
    </ThemeProvider>
  );
}

export default App;
