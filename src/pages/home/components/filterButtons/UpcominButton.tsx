import React from "react";
import "./CategoryButton.css";

export const UpcomingButton = ({
	getUpcoming,
	getPageNumber,
}: {
	getUpcoming: () => void;
	getPageNumber: (pageNumber: number) => void;
}) => {
	const setUpcoming = () => {
		getPageNumber(1);
		getUpcoming();
	};

	return (
		<button
			className="category-button"
			type="button"
			onClick={() => {
				setUpcoming();
			}}
		>
			Upcoming
		</button>
	);
};
