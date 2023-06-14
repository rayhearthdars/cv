import React from "react";
import "./Pagination.css";

const pages: number[] = [];
const totalPages = 50;
for (let i = 1; i <= totalPages; i++) {
	pages.push(i);
}

type PaginationProps = {
	getPageNumber: (pageNumber: number) => void;
	pageNumber: number;
};

export const Pagination = ({ getPageNumber, pageNumber }: PaginationProps) => {
	const clickToLast = () => {
		getPageNumber(totalPages);
	};

	const clickToFirst = () => {
		getPageNumber(1);
	};

	return (
		<div className="pagination_button_container">
			<button
				className="pagination_button"
				type="button"
				onClick={() => clickToFirst()}
			>
				First
			</button>
			<button
				className="pagination_button"
				type="button"
				onClick={() => getPageNumber(pageNumber - 1)}
			>
				Prev
			</button>
			<p
				className="ellipses"
				style={pageNumber <= 2 ? { display: "none" } : { display: "block" }}
			>
				&#8230;
			</p>
			{pages.map((page) => (
				<button
					key={page}
					className="pagination_button "
					id={pageNumber === page ? "isActive" : "isNotActive"}
					type="button"
					onClick={() => getPageNumber(page)}
					style={page >= pageNumber + 2 || page <= pageNumber - 2 ? { display: "none" } : { display: "block" }}
				>
					{page}
				</button>
			))}
			<p
				className="ellipses"
				style={pageNumber >= totalPages - 2 ? { display: "none" } : { display: "block" }}
			>
				&#8230;
			</p>
			<button
				className="pagination_button"
				type="button"
				onClick={() => getPageNumber(pageNumber + 1)}
			>
				Next
			</button>
			<button
				className="pagination_button"
				type="button"
				onClick={() => clickToLast()}
			>
				Last
			</button>
		</div>
	);
};
