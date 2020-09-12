import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<div className="nav-bar">
			<Link to="/">Shops </Link> | <Link to="/login">Login</Link> |
			<Link to="/login2">Login 2</Link> |{" "}
			<Link to="/register">Register</Link>|{" "}
			<Link to="/register2">Register 2</Link>
		</div>
	);
}

export default NavBar;
