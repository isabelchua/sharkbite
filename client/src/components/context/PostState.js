import React, { useReducer } from "react";
import PostContext from "./postContext";
import postReducer from "./postReducer";
import { nanoid } from "nanoid";

import { ADD_POST } from "../types";

const PostState = props => {
	const initialState = {
		posts: [
			{
				id: "1",
				name: "Cake",
				shop: "5",
				image: "https://i.imgur.com/w6igL9E.jpg",
				review:
					"Excellent! Staff are very friendly! Definitely will come back! Very family style! Original presentation! The pakbet was served in a hallowed squash! Nice!!",
				rating: 5,
				userid: "1",
				shopid: "1",
				date: ""
			},
			{
				id: "2",
				name: "California Maki",
				shop: "3",
				image: "",
				review: "Soooo good!",
				rating: 5,
				userid: "2",
				date: "Septemper 2 2020",
				shopid: "1"
			},
			{
				id: "3",
				name: "Bulalo",
				shop: "1",
				image: "",
				review: "Soooo good!",
				rating: 5,
				userid: "3",
				shopid: "1"
			},
			{
				id: 4,
				name: "Humba",
				shop: 4,
				image: "https://i.imgur.com/5Tuw7mv.jpg",
				review: "Soooo good!",
				rating: 5,
				userid: 1,
				shopid: 6
			},
			{
				id: 5,
				name: "Shrimps",
				shop: 1,
				image: "https://i.imgur.com/pLPZ3vM.jpg",
				review: "Soooo good!",
				rating: 5,
				userid: 1,
				shopid: 9
			},
			{
				id: 6,
				name: "Triple chocolate cheesecake",
				shop: 1,
				image: "https://i.imgur.com/fWn2enF.jpg",
				review: "Soooo good!",
				rating: 5,
				userid: 1,
				shopid: 9
			}
		],
		current: null,
		filtered: null
	};

	const [state, dispatch] = useReducer(postReducer, initialState);

	//export const foodContext = createContext();

	// Add post
	const addPost = post => {
		post.id = nanoid(10);
		console.log(post.id);
		dispatch({ type: ADD_POST, payload: post });
	};

	return (
		<PostContext.Provider
			value={{
				posts: state.posts,
				addPost
			}}
		>
			{props.children}
		</PostContext.Provider>
	);
};
export default PostState;
