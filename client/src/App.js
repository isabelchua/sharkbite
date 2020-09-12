import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Shop from "./components/shop/Shop";
import PostState from "./components/context/PostState";
import ShopState from "./components/context/ShopState";
import UserState from "./components/context/UserState";
import AuthState from "./components/context/auth/AuthState";
import Home from "./components/shop/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import NavBar from "./components/shop/NavBar";
import AlertState from "./components/context/alert/AlertState";

function App() {
	return (
		<AuthState>
			<AlertState>
				<UserState>
					<ShopState>
						<PostState>
							<Router>
								<Switch>
									<Route exact path="/register" component={Register} />
									<Route exact path="/login" component={Login} />
									<Route exact path="/">
										{/* <Link to="/">Shops </Link> | */}
										<Home />
									</Route>
									<Route path="/shop/:id/:name">
										<Shop />
									</Route>
								</Switch>
							</Router>
						</PostState>
					</ShopState>
				</UserState>
			</AlertState>
		</AuthState>
	);
}

export default App;
