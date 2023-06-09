import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectExpenceData, deleteExpense } from "../Redux/slice/BudgetSlice";
import { useDispatch } from "react-redux";

const ExpenseTable = () => {
	const expenseData = useSelector(selectExpenceData);
	const dispatch = useDispatch();
	const handleExpenseDelete = (index) => {
		dispatch(deleteExpense(index));
	};
	return (
		<div className="expense">
			<h2>Recent Expenses</h2>
			<div className="table">
				{expenseData && expenseData.length > 0 ? (
					<table>
						<thead>
							<tr>
								<th>Expense Name</th>
								<th>Expense Amount</th>
								<th>Expense Date</th>
								<th>Budget Used</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{expenseData.map((expenseData, index) => (
								<tr key={index}>
									<td>{expenseData.expenseName}</td>
									<td>{expenseData.expenseAmount}</td>
									<td>{expenseData.date}</td>
									<td>{expenseData.budgetName}</td>
									<td>
										<button onClick={() => handleExpenseDelete(index)}>
											<FaTrash />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				) : (
					<p>No Expense Data Available</p>
				)}
			</div>
		</div>
	);
};

export default ExpenseTable;
