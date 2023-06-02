import CreateBudgetCard from "../Components/Cards/CreateBudgetCard";
import ExpenseCard from "../Components/Cards/ExpenseCard";
import BudgetCard from "../Components/Cards/BudgetCard";
import ExpenseTable from "../Components/ExpenseTable";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/slice/loginSlice";
import { selectBudgetValues } from "../Redux/slice/BudgetSlice";

const Dashboard = () => {
	const user = useSelector(selectUser);
	const User = user.charAt(0).toUpperCase() + user.slice(1);

	const budgetValues = useSelector(selectBudgetValues);

	return (
		<div className="container">
			<div className="dashboard">
				<h1>
					Welcome, <span className="highlite">{User}</span>
				</h1>
				<div className="dash-main">
					{budgetValues && budgetValues.length > 0 ? null : <p>Create a budget to get started!</p>}
					<div className="flex-container">
						<CreateBudgetCard />

						{budgetValues && budgetValues.length > 0 ? <ExpenseCard /> : null}
					</div>
					{budgetValues && budgetValues.length > 0 ? <BudgetCard /> : null}
					{budgetValues && budgetValues.length > 0 ? <ExpenseTable /> : null}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
