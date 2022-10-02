import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { nanoid } from "nanoid";

function OrderForm({ order, addOrder, resetOrder }) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleClose = () => {
    setShow(false);
    handleSubmit();
  };

  const handleShow = () => setShow(true);

  function addTotal() {
    let total = 0;
    order.forEach((order) => {
      total += order.price;
    });
    return total.toFixed(2);
  }

  const handleSubmit = () => {
    addOrder(order, name, phone);
    setName("");
    setPhone("");
    resetOrder();
  };

  const orderList = order.map((orderItem) => (
    <ListGroup.Item key={nanoid()} className="d-flex justify-content-between align-items-start">
      {orderItem.name}
      <Badge bg="secondary">${orderItem.price.toFixed(2)}</Badge>
    </ListGroup.Item>
  ));

  return (
      <ListGroup variant="flush">
        {orderList}
        <ListGroup.Item 
              variant="dark"
              className="order">
              <header>
                Your Order 
                <Badge bg="secondary">{order.length}</Badge>
              </header>
              Total: ${addTotal()}
              <Button className='complete-order-btn' variant="secondary" type="button" onClick={handleShow}>
                Complete Order
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Complete Your Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter name"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="phone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter phone number"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleClose}>
                    Submit Order
                  </Button>
                </Modal.Footer>
              </Modal>
            </ListGroup.Item>
    </ListGroup>




  );
}

export default OrderForm;
