import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Details from './pages/details';
import Favorites from './pages/favorites';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/recipe-item/:id' element={<Details/>}></Route>
        <Route path='/favorites' element={<Favorites/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
