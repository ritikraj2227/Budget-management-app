import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	status: "idle",
	error: null,
	isLogin: false,
	user: "",
};

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		login: (state, action) => {
			state.isLogin = true;
			state.user = action.payload;
		},
		logout: (state) => {
            console.log("first")
			state.isLogin = false;
			state.user = "";
		},
	},
});

export default loginSlice.reducer;
export const { logout, login } = loginSlice.actions;
export const selectIsLogin = (state) => state.login.isLogin;
export const selectError = (state) => state.login.error;
export const selectUser = (state) => state.login.user;
