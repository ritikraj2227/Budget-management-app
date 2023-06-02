import { FaTrash } from "react-icons/fa";
import { logout, selectUser } from "../Redux/slice/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { resetBudget } from "../Redux/slice/BudgetSlice";
const Navbar = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const handlelogout = () => {
		alert("Delete User and All Data!");
		dispatch(logout());
		dispatch(resetBudget());
	
	};

	return (
		<div className="Navbar">
			<div className="nav-container">
				<h2>Budget Manager</h2>
			</div>
			{user && (
				<div className="border">
					<button
						type="button"
						className="nav-btn"
						onClick={handlelogout}>
						<span>Delete User </span>
						<FaTrash />
					</button>
				</div>
			)}
		</div>
	);
};

export default Navbar;
