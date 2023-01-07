import Home  from './components/Home';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Dalle2 from './components/GeImg';

function App() {
  
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <NavBar/>
   <Routes>
    <Route path='/' element={<Dalle2/>} />
   </Routes>
   </ThemeProvider>
   </>
  );
}

export default App;



