import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	budgetValues: [],
	budgetCategory: [],
	expenseData: [],
};

const budgetSlice = createSlice({
	name: "budget",
	initialState,
	reducers: {
		addBudget: (state, action) => {
			const { budgetName, budgetAmount } = action.payload;
			state.budgetValues = [...state.budgetValues, { budgetName, budgetAmount }];
		},
		addCategory: (state, action) => {
			const { budgetName } = action.payload;
			state.budgetCategory = [...state.budgetCategory, { budgetName }];
		},
		addExpence: (state, action) => {
			const currentDate = new Date().toLocaleDateString();
			const { expenseName, expenseAmount, budgetName } = action.payload;
			state.expenseData = [...state.expenseData, { expenseName, expenseAmount, budgetName, date: currentDate }];
		},
		resetBudget: (state) => {
			state.budgetValues = [];
			state.budgetCategory = [];
			state.expenseData = [];
		},
		deleteBudget: (state, action) => {
			const { index, name } = action.payload;

			const newFormValues = state.budgetValues;
			newFormValues.splice(index, 1);
			state.budgetValues = newFormValues;
			const newExpenceValue = state.expenseData;
			const filteredValues = newExpenceValue.filter((value) => value.budgetName !== name);
			state.expenseData = filteredValues;

			const newbudgetCategory = state.budgetCategory;
			const filteredCategory = newbudgetCategory.filter((value) => value.budgetName !== name);

			state.budgetCategory = filteredCategory;
		},
		deleteExpense: (state, action) => {
			const index = action.payload;
			const newFormValues = state.expenseData;
			newFormValues.splice(index, 1);
			state.expenseData = newFormValues;
		},
	},
});

export default budgetSlice.reducer;
export const { addBudget, addCategory, addExpence, resetBudget, deleteBudget, deleteExpense } = budgetSlice.actions;

export const selectBudgetValues = (state) => state.budget.budgetValues;
export const selectBudgetCategory = (state) => state.budget.budgetCategory;
export const selectExpenceData = (state) => state.budget.expenseData;
