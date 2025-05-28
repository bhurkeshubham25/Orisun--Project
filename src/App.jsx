import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './Pages/Home';
import Footers from './components/Demofooter/Footers';
import About from './Pages/About';
import Contactus from './Pages/Contactus';
import Productpage from './Pages/Productpage';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path='/contact' element={<Contactus/>}></Route>
            <Route path='/products' element={<Productpage/>}></Route>
          </Routes>
        </main>
        <Footers/>
      </div>
    </BrowserRouter>
  );
}

export default App;