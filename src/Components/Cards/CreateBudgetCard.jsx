import {  useState } from "react";
import { useDispatch } from "react-redux";
import {addBudget, addCategory } from "../../Redux/slice/BudgetSlice"

const CreateBudgetCard = () => {
	const [budgetName, setBudgetName] = useState("");
	const [budgetAmount, setBudgetAmount] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!budgetName) {
			alert("Provide Budget Name");
			return;
		}
		if (!budgetAmount) {
			alert("Provide Budget Amount");
			return;
		}
		dispatch(addBudget({ budgetName, budgetAmount }));
		dispatch(addCategory({budgetName}));
		setBudgetName("");
		setBudgetAmount("");
	};
	return (
		<div className="form">
			<h3>Create Budget</h3>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="newBudget">Budget Name</label>
					<input
						type="text"
						name="newBudget"
						id="newBudget"
						placeholder="e.g., Groceries"
						required=""
						value={budgetName}
						onChange={(e) => setBudgetName(e.target.value)}
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
						value={budgetAmount}
						onChange={(e) => setBudgetAmount(e.target.value)}
					/>
				</div>
				<button type="submit">Create Budget</button>
			</form>
		</div>
	);
}

export default CreateBudgetCard