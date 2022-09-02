import IncomeExpenseWidget from "./components/IncomeExpenseWidget";
import TransactionHistory from "./components/TransactionHistory";

const App = () => {
  return (
    <>
      <IncomeExpenseWidget income={500} expense={300} /> <hr />
      <TransactionHistory />
    </>
  );
};

export default App;
