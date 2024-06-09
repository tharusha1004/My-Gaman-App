import logo from './logo.svg';
import './App.css';

//import react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import pages
import Main from './pages/home/Main';
import Home from './pages/home/Home';
import List from './pages/list/List';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/home' element={<Home />} />
        <Route path='/hotels' element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
