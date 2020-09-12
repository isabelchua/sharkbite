import { ADD_POST } from "../types";

export default (state, action) => {
	switch (action.type) {
		case ADD_POST:
			console.log([...state.posts, action.payload]);
			return {
				...state,
				posts: [...state.posts, action.payload]
			};
		default:
			return state;
	}
};
