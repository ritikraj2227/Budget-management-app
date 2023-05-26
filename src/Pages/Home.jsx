import { useContext, useState } from "react";
import img from "../assets/images/img.png";
import UserContext from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const { login } = useContext(UserContext);
	const [user, setUser] = useState("");
	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!user) {
			alert("Please Provide Your Name!");
			return;
		}
		login(user);
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
