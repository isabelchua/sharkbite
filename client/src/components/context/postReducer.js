import { GET_POSTS, ADD_POST, POST_ERROR } from "../types";

export default (state, action) => {
	switch (action.type) {
		case GET_POSTS:
			return {
				...state,
				contacts: action.payload,
				loading: false
			};
		case ADD_POST:
			console.log([...state.posts, action.payload]);
			return {
				...state,
				posts: [...state.posts, action.payload],
				loading: false
			};
		case POST_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			};
		default:
			return state;
	}
};
