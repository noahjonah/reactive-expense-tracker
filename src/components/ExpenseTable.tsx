
// Defining the Structure of the shape object
interface ExpenseObjShape {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface ExpenseTableProps {
  expenses: ExpenseObjShape[];
  onDelete: (id: number) => void;
}

function ExpenseTable({ expenses, onDelete }: ExpenseTableProps) {
  console.log(expenses);

  return (
    <>
      {/* Expenses Table */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">#</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping each expense in expense object to a table row */}
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>$ {expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(expense.id)}
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              ${/* Reduced method for objects in javascript */}
              {expenses
                .reduce(
                  (accumulator, expense) => expense.amount + accumulator,
                  0
                )
                .toFixed(3)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default ExpenseTable