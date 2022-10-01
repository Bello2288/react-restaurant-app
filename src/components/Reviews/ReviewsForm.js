import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const INITIAL_REVIEWS = {
  name: "",
  body: "",
};

function ReviewsForm(props) {
  const [review, setReview] = useState(INITIAL_REVIEWS);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addReview(review);
    setReview(INITIAL_REVIEWS);
  };

  const { name, body } = review;

  return (
    <Form onSubmit={handleSubmit} className="col-md-6 form-box">
      <h2>Please let us know how we did. Leave a review..</h2>
      <div className="form-inputs">
        <Form.Group className="" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
            type="text"
            required="true"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={(e) =>
                setReview({ ...review, [e.target.name]: e.target.value })
            }
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="body">
            <Form.Label>Review</Form.Label>
            <Form.Control
            as="textarea"
            required="true"
            rows={5}
            name="body"
            value={body}
            onChange={(e) =>
                setReview({ ...review, [e.target.name]: e.target.value })
            }
            />
        </Form.Group>
        </div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ReviewsForm;