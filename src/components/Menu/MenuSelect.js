import Nav from 'react-bootstrap/Nav';

function MenuSelect({ updateFilter }) {


  
    return (
    <Nav className='nav-item d-flex justify-content-between' variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link className='nav-item' href="/home">All</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='nav-item' eventKey="filter2" onClick={(e) => updateFilter("appetizer")}>Appetizers</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='nav-item' eventKey="filter1" onClick={(e) => updateFilter("pizza")}>Pizza</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='nav-item' eventKey="filter3" onClick={(e) => updateFilter("salad")}>Salads</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='nav-item' eventKey="filter4" onClick={(e) => updateFilter("dessert")}>Dessert</Nav.Link>
        </Nav.Item>
    </Nav>
    )
}

export default MenuSelect;