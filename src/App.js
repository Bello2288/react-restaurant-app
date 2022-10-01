import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import { nanoid } from "nanoid";
import { useState } from "react";
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import OrderForm from './components/OrderForm/OrderForm';
import Reviews from './components/Reviews/Reviews';

function App() {
  const [selection, setSelection] = useState("a");

  return (
    <div className="App"> 
      <div className="app-container">
        <nav>
          <ul className='nav-bar'>
            <li>
              <button value="a" onClick={(e) => setSelection(e.target.value)}>
                Home
              </button>
            </li>
            <li>
              <button value="b" onClick={(e) => setSelection(e.target.value)}>
                Menu
              </button>
            </li>
            <li>
              <button value="c" onClick={(e) => setSelection(e.target.value)}>
                Order Form
              </button>
            </li>
            <li>
              <button value="d" onClick={(e) => setSelection(e.target.value)}>
                Reviews
              </button>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className='social-bar'>
            <li href="#" className='fb'><i class="fa-brands fa-facebook-f"></i></li>
            <li className='ig'><i class="fa-brands fa-instagram"></i></li>
            <li className='tw'><i class="fa-brands fa-twitter"></i></li>
          </ul>
        </nav>
      </div>
        {selection === "a" && <Home />}
        {selection === "b" && <Menu />}
        {selection === "c" && <OrderForm />}
        {selection === "d" && <Reviews />}
    </div>




  );
}

export default App;
