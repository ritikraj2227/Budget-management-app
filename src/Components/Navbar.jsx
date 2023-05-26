import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import UserContext from "../Context/UserContext";
const Navbar = () => {
	const { user, logout } = useContext(UserContext);
	
	return (
		<div className="Navbar">
			<div className="nav-container">
				<h2>Budget Manager</h2>
			</div>
			{user &&
				<div className="border">
					<button
						type="button"
						className="nav-btn"
						onClick={logout}>
						<span>Delete User </span>
						<FaTrash />
					</button>
				</div>
			}
		</div>
	);
};

export default Navbar;
