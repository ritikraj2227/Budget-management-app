import { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

const BudgetBox = ({ index, budget }) => {
	const [totalSpent, setTotalSpent] = useState(0);

	const { handleDelete, expenseData } = useContext(UserContext);

	const filteredExpenses = expenseData.filter((expense) => expense.budgetName === budget.budgetName);

	const totalSpentAmount = filteredExpenses.reduce((acc, expense) => acc + parseInt(expense.expenseAmount), 0);

	const remainingBudgetAmount = budget.budgetAmount - totalSpentAmount;

	if (totalSpent !== totalSpentAmount) {
		setTotalSpent(totalSpentAmount);
	}

	return (
		<>
			<div className="budget">
				<div className="budget-text">
					<h3>{budget.budgetName}</h3>
					<p>&#36;{budget.budgetAmount} Budgeted</p>
				</div>
				<progress
					max={budget.budgetAmount}
					value={totalSpent}>
					{totalSpent}
				</progress>
				<div className="budget-text">
					<small>&#36;{totalSpent} spent</small>
					<small>&#36;{remainingBudgetAmount} remaning</small>
				</div>
				<div className="delete">
					<button onClick={() => handleDelete(index, budget.budgetName)}>Delete Bidget</button>
				</div>
			</div>
		</>
	);
};

export default BudgetBox;
