import React from "react";

export const TrendingButton = ({ getTrending, getPageNumber }: { getTrending: () => void; getPageNumber: (pageNumber: number) => void }) => {
	const setTrendingButton = () => {
		getPageNumber(1);
		getTrending();
	};

	return (
		<button
			className="category-button"
			type="button"
			onClick={() => setTrendingButton()}
		>
			Trending
		</button>
	);
};
