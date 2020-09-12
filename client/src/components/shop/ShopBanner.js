import React from "react";
import ShareIcon from "@material-ui/icons/Share";
import { Button } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";

function ShopBanner({ shop }) {
	const { name, image, description, phone, address, short } = shop;

	//const { id, name } = useParams();

	// console.log(id);
	// console.log(shop);

	// console.log(name);
	return (
		<div className="shop-banner">
			<div className="shop-details">
				<h2>{name}</h2>
				<h4>{short}</h4>
				<img src={image} alt="food pic" width="200" height="200" />
				<p>{phone}</p>
				<p>{address}</p>
				<p>{description}</p>
				{/* {stars total} */}
				{/* {review - length} */}
			</div>
			<div className="shop-button">
				<Button
					variant="contained"
					color="primary"
					className="btn"
					endIcon={<RoomIcon className="btn-icon" />}
				>
					{" "}
					Get Directions
				</Button>
				<Button
					variant="contained"
					color="primary"
					className="btn bg-color-sub"
					endIcon={<ShareIcon className="btn-icon" />}
				>
					{" "}
					Share
				</Button>
			</div>
		</div>
	);
}

export default ShopBanner;
