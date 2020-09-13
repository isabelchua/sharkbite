import React, { useState, useEffect, useContext } from "react";
import Button from "@material-ui/core/Button";
import { Avatar } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

//import StarRating from "./StarRating";
import PostContext from "../context/postContext";
import { useParams } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import IconButton from "@material-ui/core/IconButton";
import ImageIcon from "@material-ui/icons/Image";

function ReviewForm() {
	const [file, setFile] = useState("");
	const [preview, setPreview] = useState("");
	const postContext = useContext(PostContext);

	const { addPost } = postContext;
	const { id } = useParams();
	const [rating1, setRating] = useState(0);

	const [post, setPost] = useState({
		review: "",
		rating: 0,
		//image: "",
		shopid: id
		//userid: "1"
	});

	const { review, rating, image } = post;

	// useEffect(() => {
	// 	if (current !== null) {
	// 		setPost(current);
	// 	} else {
	// 		setPost({
	// 			review: '',
	// 			stars: 0,
	// 			image: '',
	// 			type: 'member'
	// 		});
	// 	}
	// }, [postContext, stars]);

	const handleFile = e => {
		const file = e.target.files[0];
		previewFile(file);
	};

	const previewFile = file => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setPreview(reader.result);
		};
	};

	const uploadImage = async base64EncodedImage => {
		console.log(base64EncodedImage);
		try {
			await fetch("/api/upload", {
				method: "POST",
				body: JSON.stringify({ data: base64EncodedImage }),
				headers: { "Content-type": "application/json" }
			});
		} catch (err) {
			console.error(err);
		}
	};

	const onChange = e => setPost({ ...post, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		//console.log(post);
		if (preview) {
			uploadImage(preview);
		}
		addPost(post);
	};

	const [isExpanded, setExpanded] = useState(false);

	function expand() {
		setExpanded(true);
	}

	return (
		<div
			className="review-form"
			style={{ height: isExpanded ? "220px" : "140px" }}
		>
			<form onSubmit={onSubmit}>
				<Avatar src="https://imgur.com/LmpYcOR.jpg" />
				<div className="col">
					{/* <StarRating name="stars" value={rating} /> */}
					{/* <Box component="fieldset" mb={1} borderColor="transparent"> */}
					{/* <Typography component="legend">Controlled</Typography> */}
					<Rating
						name="rating"
						value={rating1}
						onChange={(event, newValue) => {
							setRating(newValue);
						}}
					/>
					{/* </Box> */}

					<textarea
						name="review"
						value={review}
						onClick={expand}
						onChange={onChange}
						placeholder="Write a Review"
						rows={isExpanded ? 3 : 1}
						//height={isExpanded ? "100px" : "10px"}
						cols="60"
					></textarea>
					<div className="img-preview-wrap">
						<input
							id="file-upload"
							type="file"
							name="image"
							accept="image/*"
							onChange={handleFile}
							value={file}
							className="file-upload-btn"
							size="2"
							onClick={expand}
						/>
						<label
							aria-label="add image"
							htmlFor="file-upload"
							className="file-upload"
						>
							<IconButton variant="contained" component="span">
								<ImageIcon />
							</IconButton>
						</label>
						{/* <input
						name="image"
						value={image}
						onChange={onChange}
						placeholder="Add image url"
					></input> */}

						<Button
							type="submit"
							variant="contained"
							color="primary"
							className="btn"
							endIcon={<SendIcon className="btn-icon" />}
						>
							{" "}
							Add Review
						</Button>
						{preview && (
							<img
								src={preview}
								alt="chosen"
								className="img-preview"
								style={{ height: "70px" }}
							/>
						)}
					</div>
				</div>
			</form>
		</div>
	);
}

export default ReviewForm;
