import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import OrderForm from './components/OrderForm/OrderForm';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    
    <div className="App">
      <Container className='app-container'>
        <Row>
          <Col>
            <Home />
            <Menu />
            <OrderForm />
            <Reviews />
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default App;
