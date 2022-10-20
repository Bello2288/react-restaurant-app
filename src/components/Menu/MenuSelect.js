import Nav from 'react-bootstrap/Nav';


function MenuSelect({ updateSelect }) {


  
    return (
    <Nav className='nav-item d-flex justify-content-between' variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link className='nav-item' eventKey="filter5" onClick={(e) => updateSelect("")} >All</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='nav-item' eventKey="filter2" onClick={(e) => updateSelect("appetizer")}>Appetizers</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='nav-item' eventKey="filter1" onClick={(e) => updateSelect("pizza")}>Pizza</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='nav-item' eventKey="filter3" onClick={(e) => updateSelect("salad")}>Salads</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='nav-item' eventKey="filter4" onClick={(e) => updateSelect("dessert")}>Dessert</Nav.Link>
        </Nav.Item>
    </Nav>
    )
}

export default MenuSelect;