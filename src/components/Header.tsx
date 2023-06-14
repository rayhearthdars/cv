import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<header>
			<Link
				style={{ textDecoration: "none" }}
				to="/"
			>
				<h1>Movies App</h1>
			</Link>
		</header>
	);
};
