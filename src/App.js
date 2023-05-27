import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import AppNav from './Component/AppNav/AppNav';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
   <>
  <AppNav/>
  <Routes>
    <Route path="/" Component={HomePage}/>
    <Route path="/about" Component={AboutPage}/>
  </Routes>

   </>
  );
}

export default App;
