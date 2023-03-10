import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Photos from './components/pages/Photos';
import Videos from './components/pages/Videos';
import Contact from './components/pages/Contact';
import Success from './components/pages/Success';
import Error from './components/pages/Error';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/photos' element={<Photos />} />
        <Route exact path='/videos' element={<Videos />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/success' element={<Success />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
