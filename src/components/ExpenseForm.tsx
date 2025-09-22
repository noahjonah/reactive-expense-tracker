

function ExpenseForm() {
  return (
    <>
      <form className="container mt-4 mb-5">
        {/* Description Section */}
        <fieldset className="mb-3">
          <label htmlFor="description" className="form-label">
            Expense Description
          </label>
          <input type="text" id="description" className="form-control" />
        </fieldset>
        {/* Amount Section */}
        <fieldset className="mb-3">
          <label htmlFor="amount" className="form-label">
            Expense Amount
          </label>
          <input type="text" id="amount" className="form-control" />
        </fieldset>
        {/* Category Dropdown */}
        <fieldset>
          <label htmlFor="category" className="mt-20 form-label">
            Expense Category
          </label>
          <select id="category" className="form-select">
            <option value="">Select the category of your expense</option>
            <option value="1">Stationaries</option>
            <option value="2">Food Stuff</option>
            <option value="3">Cleaning Materials</option>
            <option value="4">Transport</option>
          </select>
        </fieldset>
        <button type="submit" className="btn btn-primary mt-4">Submit</button>
      </form>
    </>
  );
}

export default ExpenseForm