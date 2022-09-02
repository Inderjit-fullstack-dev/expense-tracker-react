import { Row, Col, Table } from "react-bootstrap";
import Currency from "react-currency-formatter";

const IncomeExpenseWidget = ({ income = 0, expense = 0 }) => {
  return (
    <Row>
      <Col md={12}>
      <h3>
          Balance: <Currency quantity={ income - expense } currency="INR" />
        </h3>
      </Col>
      <Col md={4}>
        <Table striped bordered hover size="sm" className="mt-2">
          <thead>
            <tr>
              <th className="text-center text-success">Income</th>
              <th className="text-center text-danger">Expense</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">
                <Currency quantity={income} currency="INR" />
              </td>
              <td className="text-center">
                <Currency quantity={expense} currency="INR" />
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default IncomeExpenseWidget;
