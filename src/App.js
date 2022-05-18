import {
  BrowserRouter as Router,
  Routes, 
  Route
} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Teams from './Pages/Teams/Teams';
import Galery from './Pages/Galery/Galery';
import Me from './Pages/Me/Me';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/teams' element={<Teams />} />
        <Route path='/galery' element={<Galery />} />
        <Route path='/me' element={<Me />} />
      </Routes>
    </Router>
  );
}

export default App;