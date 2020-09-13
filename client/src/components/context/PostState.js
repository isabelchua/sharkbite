import React, { useReducer } from "react";
import axios from "axios";
import PostContext from "./postContext";
import postReducer from "./postReducer";
//import { nanoid } from "nanoid";

import {
	GET_POSTS,
	CLEAR_POSTS,
	ADD_POST,
	POST_ERROR,
	CLEAR_USER
} from "../types";

const PostState = props => {
	const initialState = {
		posts: null,
		//[
		// 	{
		// 		id: "1",
		// 		name: "Cake",
		// 		shop: "5",
		// 		image: "https://i.imgur.com/w6igL9E.jpg",
		// 		review:
		// 			"Excellent! Staff are very friendly! Definitely will come back! Very family style! Original presentation! The pakbet was served in a hallowed squash! Nice!!",
		// 		rating: 5,
		// 		userid: "1",
		// 		shopid: "1",
		// 		date: ""
		// 	},
		// 	{
		// 		id: "2",
		// 		name: "California Maki",
		// 		shop: "3",
		// 		image: "",
		// 		review: "Soooo good!",
		// 		rating: 5,
		// 		userid: "2",
		// 		date: "Septemper 2 2020",
		// 		shopid: "1"
		// 	},
		// 	{
		// 		id: "3",
		// 		name: "Bulalo",
		// 		shop: "1",
		// 		image: "",
		// 		review: "Soooo good!",
		// 		rating: 5,
		// 		userid: "3",
		// 		shopid: "1"
		// 	},
		// 	{
		// 		id: 4,
		// 		name: "Humba",
		// 		shop: 4,
		// 		image: "https://i.imgur.com/5Tuw7mv.jpg",
		// 		review: "Soooo good!",
		// 		rating: 5,
		// 		userid: 1,
		// 		shopid: 6
		// 	},
		// 	{
		// 		id: 5,
		// 		name: "Shrimps",
		// 		shop: 1,
		// 		image: "https://i.imgur.com/pLPZ3vM.jpg",
		// 		review: "Soooo good!",
		// 		rating: 5,
		// 		userid: 1,
		// 		shopid: 9
		// 	},
		// 	{
		// 		id: 6,
		// 		name: "Triple chocolate cheesecake",
		// 		shop: 1,
		// 		image: "https://i.imgur.com/fWn2enF.jpg",
		// 		review: "Soooo good!",
		// 		rating: 5,
		// 		userid: 1,
		// 		shopid: 9
		// 	}
		// ],
		current: null,
		filtered: null,
		error: null
	};

	const [state, dispatch] = useReducer(postReducer, initialState);

	// Get posts
	const getPosts = async () => {
		try {
			const res = await axios.get(`/api/posts`);
			dispatch({ type: GET_POSTS, payload: res.data });
		} catch (err) {
			dispatch({ type: POST_ERROR, payload: err.response.msg });
		}
	};

	//Clear user data
	const clearUser = () => {
		dispatch({ type: CLEAR_USER });
	};

	//export const foodContext = createContext();

	// Add post
	const addPost = async post => {
		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		};
		try {
			//console.log(post);

			//console.log(post.shopid);

			const res = await axios.post(
				`/api/posts/${post.shopid}`,
				post,
				config
			);
			//console.log(res);

			dispatch({ type: ADD_POST, payload: res.data });
		} catch (err) {
			dispatch({ type: POST_ERROR, payload: err.response.msg });
		}
		//post.id = nanoid(10);
	};

	return (
		<PostContext.Provider
			value={{
				posts: state.posts,
				error: state.error,
				getPosts,
				addPost
			}}
		>
			{props.children}
		</PostContext.Provider>
	);
};
export default PostState;
