import React from "react";
import "./CategoryButton.css";

export const AllMoviesButton = ({
	getMovies,
	getPageNumber,
}: {
	getMovies: () => void;
	getPageNumber: (pageNumber: number) => void;
}) => {
	const setUpcoming = () => {
		getPageNumber(1);
		getMovies();
	};

	return (
		<button
			className="category-button"
			type="button"
			onClick={() => {
				setUpcoming();
			}}
		>
			All Movies
		</button>
	);
};
