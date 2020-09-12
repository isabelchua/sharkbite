import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

function SearchBar() {
	// const onChange = e => {
	// 	//value of input of filter
	// 	if (text.current.value !== "") {
	// 		filterContacts(e.target.value);
	// 	} else {
	// 		clearFilter();
	// 	}
	// };

	return (
		<form className="search-form">
			<input
				type="text"
				//ref={text}
				placeholder="Search"
				//onChange={onChange}
				name=""
				id=""
				className="search"
			/>
			<IconButton aria-label="search" className="search-icon">
				<SearchIcon />
			</IconButton>
		</form>
	);
}

export default SearchBar;
