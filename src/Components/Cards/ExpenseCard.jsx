import { useContext, useState } from "react";
import UserContext from "../../Context/UserContext";

const ExpenseCard = () => {
	const { budgetCategory, handleExpenseSubmit } = useContext(UserContext);

	const [expenseName, setExpenseName] = useState("");
	const [expenseAmount, setExpenseAmount] = useState("");
	const [budgetName, setBudgetName] = useState(budgetCategory[0]?.name);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!expenseName) {
			alert("Enter Expense Name");
			return;
		}
		if (!expenseAmount) {
			alert("Enter Expense Amount");
			return;
		}
		handleExpenseSubmit(expenseName, expenseAmount, budgetName);
		setExpenseName("");
		setExpenseAmount("");
	};
	return (
		<div className="form">
			<h3>Add New Expense</h3>
			<form onSubmit={handleSubmit}>
				<div className="flex">
					<div>
						<label htmlFor="newBudget">Expense Name</label>
						<input
							type="text"
							name="newBudget"
							id="newBudget"
							placeholder="e.g., Groceries"
							required=""
							value={expenseName}
							onChange={(e) => setExpenseName(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="newBudgetAmount">Amount</label>
						<input
							type="number"
							step="0.01"
							name="newBudgetAmount"
							id="newBudgetAmount"
							placeholder="e.g., $350"
							required=""
							inputMode="decimal"
							value={expenseAmount}
							onChange={(e) => setExpenseAmount(e.target.value)}></input>
					</div>
				</div>
				<div>
					<label htmlFor="newExpenseBudget">Budget Category</label>
					<select
						name="newExpenseBudget"
						id="newExpenseBudget"
						required=""
						value={budgetName}
						onChange={(e) => setBudgetName(e.target.value)}>
						{budgetCategory.map((value, index) => (
							<option
								key={index}
								value={value.name}>
								{value.name}
							</option>
						))}
					</select>
				</div>
				<button type="submit">Add Expense</button>
			</form>
		</div>
	);
};

export default ExpenseCard;
