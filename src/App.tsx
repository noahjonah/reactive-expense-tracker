import { useState } from "react";
import "./App.css";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Books", amount: 10, category: "Stationaries" },
    { id: 2, description: "Fish", amount: 30, category: "Food Stuff" },
    { id: 3, description: "Makers", amount: 40, category: "Stationaries" },
    { id: 4, description: "Salad", amount: 10, category: "Food Stuff" },
    { id: 5, description: "Town jouney", amount: 5, category: "Transport" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const showExpensesOfCategory = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div className="container">
      <h3 className="mb-2">Reactive Expense Tracker</h3>
      <ExpenseForm></ExpenseForm>

      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        ></ExpenseFilter>
      </div>

      <ExpenseTable
        expenses={showExpensesOfCategory}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpenseTable>
    </div>
  );
}

export default App;
