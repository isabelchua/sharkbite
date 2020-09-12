import React, { useState } from "react";

function LoginPlain() {
	const [user, setUser] = useState({
		email: "",
		password: ""
	});
	const { email, password } = user;

	const onChange = e =>
		setUser({
			...user,
			[e.target.name]: e.target.value
		});

	const onSubmit = e => {
		e.preventDefault();
		console.log("login");
	};

	return (
		<div>
			<h1>Account Login</h1>
			<form onSubmit={onSubmit}>
				<div className="field-wrap">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						value={email}
						onChange={onChange}
						id=""
					/>
				</div>
				<div className="field-wrap">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						value={password}
						onChange={onChange}
						id=""
					/>
				</div>

				<input type="submit" value="Login" className="btn" />
			</form>
		</div>
	);
}

export default LoginPlain;
