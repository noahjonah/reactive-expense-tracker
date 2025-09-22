import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";

function App() {
  return (
    <div className="container">
      <h3 className="mb-2">Reactive Expense Tracker</h3>
      <ExpenseForm></ExpenseForm>

      <h4>Logged Expenses</h4>
      <ExpenseTable></ExpenseTable>
    </div>
  );
}

export default App;
