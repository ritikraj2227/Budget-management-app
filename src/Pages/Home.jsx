import {  useState } from "react";
import img from "../assets/images/img.png";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/slice/loginSlice";
import { useDispatch } from "react-redux";

const Home = () => {
	const [user, setUser] = useState("");
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!user) {
			alert("Please Provide Your Name!");
			return;
		}
		dispatch(login(user));
		setUser("");
		navigate("/dashboard");
	};
	return (
		<div className="container">
			<div className="main">
				<div className="intro">
					<h1>Take Control of Your Money</h1>
					<p>Money is loyal. The more you protect it, the more it protects you back. </p>
					<form>
						<input
							type="text"
							placeholder="Enter Your Name"
							value={user}
							onChange={(e) => setUser(e.target.value)}
						/>
						<button
							type="submit"
							onClick={handleSubmit}>
							Register User
						</button>
					</form>
				</div>
				<div>
					<img
						src={img}
						alt="img"
						width={600}
						height={500}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
