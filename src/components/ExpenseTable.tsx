

function ExpenseTable() {
  return (
    <div className="container mt-3">
      <form className="mb-4">
        {/* Category Dropdown Filter */}
        <fieldset>
          <label htmlFor="category-filter" className="mt-20 form-label">
            Filter Expenses by Categories::
          </label>
          <select id="category-filter" className="form-select">
            <option value="">All Categories</option>
            <option value="1">Stationaries</option>
            <option value="2">Food Stuff</option>
            <option value="3">Cleaning Materials</option>
            <option value="4">Transport</option>
          </select>
        </fieldset>
      </form>
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
          <tr>
            <td>Milk</td>
            <td>$ 5.00</td>
            <td>Food Stuff</td>
            <td>
              <button className="btn btn-danger">DELETE</button>
            </td>
          </tr>
          <tr>
            <td>Total</td>
            <td>$ 5.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTable