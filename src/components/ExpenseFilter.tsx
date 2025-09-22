
interface FilterProps{
    onSelectCategory: (category: string) => void; 
}

function ExpenseFilter({onSelectCategory}: FilterProps) {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All Categories</option>
      <option value="Stationaries">Stationaries</option>
      <option value="Food Stuff">Food Stuff</option>
      <option value="Cleaning Materials">Cleaning Materials</option>
      <option value="Transport">Transport</option>
    </select>
  );
}

export default ExpenseFilter