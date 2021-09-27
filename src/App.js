import React from 'react';
import SideMenu from './Navigation/SideMenu'

import { createTheme ,ThemeProvider} from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#005688',
    },
    secondary: {
      main: '#5C656A',
      light: '#929292',
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});



function App() {
  return (
    <div style={{ background: '#F8FAFC'}}>
      <ThemeProvider theme={theme}>

      <SideMenu/>

      </ThemeProvider>
    </div>
  );
}

export default App;