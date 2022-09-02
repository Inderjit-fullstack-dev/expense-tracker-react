import Table from "react-bootstrap/Table";
import TransactionHistoryLine from "./TransactionHistoryLine";
const TransactionHistory = () => {
  return (
    <>
      <h4 className="mt-2">Transaction History</h4>
      <Table size="sm">
        <tbody>
          <TransactionHistoryLine
            description="hi"
            date="12 aug, 2022"
            amount={500}
            isExpense={true}
          />
        </tbody>
      </Table>
    </>
  );
};

export default TransactionHistory;
