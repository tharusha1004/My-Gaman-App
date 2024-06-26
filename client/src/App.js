//import logo from './logo.svg';
import './App.css';

//import react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import pages
import Main from './pages/home/Main';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/home' element={<Home />} />
        <Route path='/hotels' element={<List />} />
        <Route path='/hotels/:id' element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
