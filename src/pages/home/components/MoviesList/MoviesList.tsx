import React from "react";
import { MovieCard } from "./MovieCard";
import "./MoviesList.css";
import { Movie } from "../../../../models/movie";

type MovieListProps = {
	movies: Movie[];
	pageNumber: (pageNumber: number) => void;
};

export const MoviesList = ({ movies, pageNumber }: MovieListProps) => {
	return (
		<>
			<section className="movie-container">
				{movies.map((item) => (
					<MovieCard
						movie={item}
						key={item.id}
					/>
				))}
			</section>
		</>
	);
};
