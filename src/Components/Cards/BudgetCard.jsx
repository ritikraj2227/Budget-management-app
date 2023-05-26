import { useContext } from "react";
import UserContext from "../../Context/UserContext";
import BudgetBox from "../BudgetBox";




const BudgetCard = () => {
	const { budgetValues } = useContext(UserContext);



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
