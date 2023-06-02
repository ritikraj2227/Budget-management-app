import BudgetBox from "../BudgetBox";
import { useSelector } from "react-redux";
import { selectBudgetValues } from "../../Redux/slice/BudgetSlice";

const BudgetCard = () => {
	const budgetValues = useSelector(selectBudgetValues);

	return (
		<>
			<h2>Existing Budgets</h2>
			<div className="budgets">
				{budgetValues.map((value, index) => (
					<BudgetBox
						key={index}
						budget={value}
						index={index}
					/>
				))}
			</div>
		</>
	);
};

export default BudgetCard;
