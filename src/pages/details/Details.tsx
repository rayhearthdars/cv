import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieById } from "../../api/movie";
import { Movie } from "../../models/movie";
import { Header } from "../../components/Header";
import "./Details.css";

export const Details = () => {
	const [movieData, setMovieData] = useState<Movie | null>(null);
	let { movieId } = useParams();

	useEffect(() => {
		const getMovie = async () => {
			const result = await getMovieById(movieId);
			setMovieData(result);
		};
		getMovie();
	}, []);

	if (movieData === null) return null;
	return (
		<>
			<main className="main_container">
				<Link to="/">
					<button
						className="goBackButton"
						type="button"
					>
						Go Back
					</button>
				</Link>
				<div className="details_poster_title_overview_flex_container">
					<img
						className="details_poster"
						src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
						alt={`poster for the fiml ${movieData.title}`}
					/>
					<div className="details_movie_flex_container">
					
							<h2 className="details_title">{movieData.title}</h2>

							<div className="details_ratings_container">
								<div className="details_ratings_number">
									<p className="details_ratings_actual_number">{movieData.vote_average}</p>
								</div>
								<h3 className="details_ratings">Ratings</h3>
							</div>

							<div className="details_release_date_container">
								<h3>Release Date</h3>
								<p>{movieData.release_date}</p>
							</div>
					
					</div>
					<div className="details_overview">
						<h3 className="details_overview_title">Synopsis</h3>
						<p>{movieData.overview}</p>
					</div>
				</div>
			</main>
		</>
	);
};
