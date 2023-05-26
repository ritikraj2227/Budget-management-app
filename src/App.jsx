import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route element={<PrivateRoute />}>
					<Route
						exact
						path="/dashboard"
						element={<Dashboard />}
					/>
				</Route>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="*"
					element={<p>There nothing here: 404!</p>}
				/>
			</Routes>
		</div>
	);
}

export default App;
