import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTransaction } from "../core/redux/slices/transactionSlice";
const TransactionForm = () => {
  const dispatch = useDispatch();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTransaction({
        description: "hello world",
        amount: 2222,
        type: "income",
        date: null,
      })
    );
  };
  return (
    <Form onSubmit={handleFormSubmit}>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter Description" />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="amount">
            <Form.Label>Type</Form.Label>
            <Form.Select aria-label="select type: it can be Income or Expense">
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="amount">
            <Form.Label>Amount</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </Col>
      </Row>
      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default TransactionForm;
