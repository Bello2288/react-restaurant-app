import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function MenuList({ item, ...props }) {
 

  return (
    <li className="menu-list">
      <Card className="menu-card">
        <div className="card-content">
          <Card.Img className="menu-image" variant="top" src={item.image} />
          <Card.Body>
            <Card.Title className="card-title">{item.name} - ${item.price.toFixed(2)}{" "}</Card.Title>
            <Card.Text className="card-body">{item.description}</Card.Text>
          </Card.Body>
        </div> 
          <Button className="order-btn" variant="primary" type="button" onClick={() => props.updateOrder(item.id)}>
            Add to Order
          </Button>
      </Card>
    </li>
  );
}

export default MenuList;