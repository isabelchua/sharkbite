import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

function Post({ posts, user }) {
	//const foodContext = useContext(FoodContext);

	const { name, review, image } = posts;
	const { fname, lname, address, rating } = user;

	return (
		<div className="post">
			<div className="user-profile-post">
				<Avatar src={user.image} />
				<div className="user-details-post">
					<p>
						<strong>{fname + " " + lname}</strong>
					</p>
					<p>{address}</p>
				</div>
			</div>
			<div className="post-content">
				<Rating name="read-only" value={rating} readOnly />
				{/* <h4>{name}</h4> */}
				<p>{review}</p>
				<img src={image} alt="food pic" className="img" />
			</div>
		</div>
	);
}

Post.propTypes = {
	posts: PropTypes.object.isRequired
};

export default Post;
