import { useForm, type FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

// Zod validation rules(schema) for category, description and amount fields
const validationsSchema = z.object({
  description: z
    .string()
    .min(3, { message: "Too small description!" })
    .max(20, { message: "Too long description!" }),
  amount: z.number({ message: "Expense amount is required!" }).min(1),
  categories: z.enum(
    ["Stationaries", "Food Stuff", "Cleaning Materials", "Transport"],
    { message: "Please select a category!" }
  ),
});

// Getting the typescript type for the zod schema to instruct the form on type of data to be accepted
type ExpenseFormData = z.infer<typeof validationsSchema>;

function ExpenseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(validationsSchema),
  });

  let [expense, setExpense] = useState({});

  // Data submition logic
  const onSubmit = (data: FieldValues) => setExpense((expense = data));

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="container mt-4 mb-5">
        {/* Description Section */}
        <fieldset className="mb-3">
          <label htmlFor="description" className="form-label">
            Expense Description
          </label>
          <input
            {...register("description")}
            type="text"
            id="description"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description?.message}</p>
          )}
        </fieldset>
        {/* Amount Section */}
        <fieldset className="mb-3">
          <label htmlFor="amount" className="form-label">
            Expense Amount
          </label>
          {}
          <input
            {...register("amount", { valueAsNumber: true })}
            type="number"
            id="amount"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount?.message}</p>
          )}
        </fieldset>
        {/* Category Dropdown */}
        <fieldset>
          <label htmlFor="categories" className="mt-20 form-label">
            Expense Category
          </label>
          <select
            id="categories"
            {...register("categories")}
            className="form-select"
          >
            <option value="">Select the category of your expense</option>
            <option value="Stationaries">Stationaries</option>
            <option value="Food Stuff">Food Stuff</option>
            <option value="Cleaning Materials">Cleaning Materials</option>
            <option value="Transport">Transport</option>
          </select>
          {errors.categories && (
            <p className="text-danger">{errors.categories.message}</p>
          )}
        </fieldset>
        <button
          disabled={!isValid}
          type="submit"
          className="btn btn-primary mt-4"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default ExpenseForm;
