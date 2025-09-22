import { categories } from "../categories";

interface FilterProps {
  onSelectCategory: (category: string) => void;
}

function ExpenseFilter({ onSelectCategory }: FilterProps) {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All Categories</option>
      {/* Populating categories automatically */}
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default ExpenseFilter;
