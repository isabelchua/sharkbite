import React, { useContext, useEffect } from "react";
import ShopContext from "../context/shopContext";
import ShopCard from "./ShopCard";
import Logo from "./Logo";
import NavBar from "../layout/NavBar";
import AuthContext from "../context/auth/authContext";

function Home() {
	const authContext = useContext(AuthContext);
	const shopContext = useContext(ShopContext);

	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);
	const { shop } = shopContext;

	return (
		<div className="home-wrap">
			<div className="logo-home">
				<Logo />
				<NavBar />
			</div>
			<div className="home-card">
				{shop.map(sho => (
					<ShopCard key={sho.id} shop={sho} />
				))}
			</div>
		</div>
	);
}

export default Home;
