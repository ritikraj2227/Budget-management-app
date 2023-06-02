import { useState } from "react";
import { addExpence, selectBudgetCategory } from "../../Redux/slice/BudgetSlice";
import { useDispatch, useSelector } from "react-redux";

const ExpenseCard = () => {
	const budgetCategory = useSelector(selectBudgetCategory);
	const dispatch = useDispatch();

	const [expenseName, setExpenseName] = useState("");
	const [expenseAmount, setExpenseAmount] = useState("");
	const [budgetName, setBudgetName] = useState(budgetCategory[0]?.budgetName);

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
		dispatch(addExpence({ expenseName, expenseAmount, budgetName }));
		setExpenseName("");
		setExpenseAmount("");
	};
	return (
		<div className="form">
			{budgetCategory.length === 1 ? (
				<h3>
					Add New <span style={{ color: "red" }}>{budgetCategory[0].budgetName}</span> Expense
				</h3>
			) : (
				<h3>Add New Expense</h3>
			)}

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
					{budgetCategory.length === 1 ? null : (
						<>
							<label htmlFor="newExpenseBudget">Budget Category</label>
							<select
								name="newExpenseBudget"
								id="newExpenseBudget"
								required=""
								value={budgetName}
								onChange={(e) => setBudgetName(e.target.value)}>
								{budgetCategory?.map((value, index) => (
									<option
										key={index}
										value={value.budgetName}>
										{value.budgetName}
									</option>
								))}
							</select>
						</>
					)}
				</div>
				<button type="submit">Add Expense</button>
			</form>
		</div>
	);
};

export default ExpenseCard;
