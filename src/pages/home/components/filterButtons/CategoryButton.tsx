import React from "react";
import "./CategoryButton.css";
import { Category } from "../../../../models/category";

type CategoryButtonProps = {
	name: string;
	getCategory: (category: Category) => void;
	category: Category;
	getPageNumber: (pageNumber: number) => void;
};

export const CategoryButton = ({ category, name, getCategory, getPageNumber }: CategoryButtonProps) => {
	return (
		<button
			type="button"
			onClick={() => {
				getPageNumber(1);
				getCategory(category);
				
			}}
			className="category-button"
		>
			{name}
		</button>
	);
};
