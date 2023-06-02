import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectIsLogin } from "../Redux/slice/loginSlice";

const PrivateRoute = () => {
	const LoggedIn = useSelector(selectIsLogin);

	return LoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
