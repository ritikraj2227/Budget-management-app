import { useState } from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [budgetValues, setBudgetValues] = useState([]);
	const [budgetCategory, setBudgetCategory] = useState([]);
	const [expenseData, setExpenseData] = useState([]);

	const login = (name) => {
		setUser(name);
	};

	const logout = () => {
		alert("Delete User and All Data!");
		setUser(null);
		setBudgetValues([]);
		setBudgetCategory([]);
		setExpenseData([]);
	};

	const handleBudgetSubmit = (budgetName, budgetAmount) => {
		setBudgetValues([...budgetValues, { budgetName, budgetAmount }]);
	};

	const handleCategorySubmit = (name) => {
		setBudgetCategory([...budgetCategory, { name }]);
	};

	const handleExpenseSubmit = (expenseName, expenseAmount, budgetName) => {
		const currentDate = new Date().toLocaleDateString();
		setExpenseData([...expenseData, { expenseName, expenseAmount, budgetName, date: currentDate }]);
	};

	const handleDelete = (index, budgetName) => {
		console.log(budgetName);

		const newFormValues = [...budgetValues];
		newFormValues.splice(index, 1);
		setBudgetValues(newFormValues);
		const newExpenceValue = [...expenseData];
		const filteredValues = newExpenceValue.filter((value) => value.budgetName !== budgetName);
		setExpenseData(filteredValues);
		
		const newbudgetCategory = [...budgetCategory];
		const filteredCategory = newbudgetCategory.filter((value) => value.name !== budgetName);
		setBudgetCategory(filteredCategory);
	};

	const handleExpenseDelete = (index) => {
		const newFormValues = [...expenseData];
		newFormValues.splice(index, 1);
		setExpenseData(newFormValues);
	};

	return (
		<UserContext.Provider
			value={{ user, login, logout, budgetValues, handleBudgetSubmit, handleDelete, budgetCategory, handleCategorySubmit, handleExpenseSubmit, handleExpenseDelete, expenseData }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
