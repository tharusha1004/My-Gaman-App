import logo from './logo.svg';
import './App.css';

//import react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import pages
import Main from './pages/home/Main';
import Home from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
