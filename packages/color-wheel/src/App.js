import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Color from './components/color/Color';
import Wheel from './components/Wheel';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import List from './components/List';
import { ScrollRestoration } from 'react-router-dom';

function App() {
  return (
    <div>
      <ScrollRestoration />
      <Navbar />
      <Routes>
        <Route path='color-wheel/:id' element={<Color />} />
        <Route path='/' element={[<Home />, <Wheel />]} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
