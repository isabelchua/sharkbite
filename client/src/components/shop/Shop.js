import React, { useContext, useEffect } from "react";
import ShopBanner from "./ShopBanner";
import Post from "./Post";
import PostContext from "../context/postContext";
import ShopContext from "../context/shopContext";
import UserContext from "../context/userContext";
import ReviewForm from "./ReviewForm";
import SearchBar from "./SearchBar";
import NavBar from "../layout/NavBar";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import AuthContext from "../context/auth/authContext";
import Spinner from "../layout/Spinner";

import Logo from "./Logo";

function Shop() {
	const postContext = useContext(PostContext);
	const shopContext = useContext(ShopContext);
	const userContext = useContext(UserContext);
	const authContext = useContext(AuthContext);

	// useEffect(() => {
	// 	authContext.loadUser();
	// 	// eslint-disable-next-line
	// }, []);

	useEffect(() => {
		getPosts();
		//eslint-disable-next-line
	}, []);
	const { posts, getPosts, loading } = postContext;
	const { shop } = shopContext;
	const { user } = userContext;

	const { id, name } = useParams();

	if (posts !== null && posts.length === 0 && !loading) {
		return <h4>No reviews yet be the first one to write a review!</h4>;
	}

	// console.log(
	// 	food
	// 		.filter(food => food.shopid === Number(id).map)
	// 		.map(post => {
	// 			post;
	// 		})
	// );

	// 	how do I use filter on a component?
	// `posts.filter(post => <Post  {post} />)`

	// foo.includes(Number(id))
	// === Number(id)
	//console.log(post.shopid);
	return (
		<div className="main-wrap">
			<div className="col1">
				<Logo />

				<ShopBanner shop={shop.find(obj => obj.id === id)} />
			</div>
			<div className="col2">
				<div className="row">
					<SearchBar />
					<NavBar />
				</div>
				<ReviewForm />

				<div className="sort">
					<p className="right">Sort by Highest Rated</p>
				</div>
				{posts !== null && !loading ? (
					posts
						.filter(foo => foo.shopid === id)
						.map(foo => (
							<Post
								key={foo.id}
								posts={foo}
								user={user.find(user => foo.userid === user.id)}
							/>
						))
				) : (
					<Spinner />
				)}

				<Footer />
			</div>
		</div>
	);
}

export default Shop;
