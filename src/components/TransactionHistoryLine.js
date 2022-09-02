import Currency from "react-currency-formatter";

const TransactionHistoryLine = ({ description, date, amount = 0, isExpense = false }) => {
    return (
        <tr className={ isExpense ? 'danger-light' : 'success-light' }>
              <td> { description } </td>
              <td> { date } </td>
              <td>
                <Currency quantity={amount} currency="INR" />
              </td>
              <td className="text-center">
                <i className="fa fa-edit text-dark"></i> &nbsp;
                <i className="fa fa-trash text-danger"></i>
              </td>
        </tr>
    );
}

export default TransactionHistoryLine;