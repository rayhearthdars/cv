import React from "react";
import { useState, useEffect } from "react";
import { getAllMovies, getMoviesByCategory, getMoviesBySearch, getTrendingMovies } from "../../api/movie";
import { MoviesList } from "./components/MoviesList/MoviesList";
import { Header } from "../../components/Header";
import { CategoriesList } from "./components/filterButtons/CategoriesList";
import { Movie } from "../../models/movie";
import { Category } from "../../models/category";
import { SearchBar } from "./components/SearchBar/SearchBar";
import "./HomePage.css";
import { getUpcomingMovies } from "../../api/movie";
import { Pagination } from "./components/pagination/Pagination";

export const HomePage = () => {
	const [movies, setMovies] = useState<Movie[]>([]);
	const [pageNumber, setPageNumber] = useState<number>(1);
	const [category, setCategory] = useState<Category | undefined>(undefined);
	const [query, setQuery] = useState<string>("");
	const [allMovies, setAllMovies] = useState<boolean>(true);
	const [upcoming, setUpcoming] = useState<boolean>(false);
	const [trendingButton, setTrendingButton] = useState<boolean>(false);

	useEffect(() => {
		const getMovies = async () => {
			const result = await getAllMovies(pageNumber);
			setMovies(result ?? []);
		};
		if (allMovies) {
			getMovies();
		}
	}, [pageNumber, allMovies]);

	const getClickedCategory = (category: Category) => {
		setAllMovies(false);
		setUpcoming(false);
		setTrendingButton(false);
		setCategory(category);
	};

	const handleAllMoviesClicked = () => {
		setCategory(undefined);
		setUpcoming(false);
		setAllMovies(true);
		setTrendingButton(false);
	};

	const handleUpcomingClicked = () => {
		setCategory(undefined);
		setAllMovies(false);
		setUpcoming(true);
		setTrendingButton(false);
	};

	const handleTrendingButtonClicked = () => {
		setCategory(undefined);
		setAllMovies(false);
		setUpcoming(false);
		setTrendingButton(true);
	};

	useEffect(() => {
		const getByCategory = async () => {
			const result = await getMoviesByCategory(category?.id, pageNumber);
			setMovies(result ?? []);
		};
		getByCategory();
	}, [category, pageNumber]);

	useEffect(() => {
		const getMoviesBySearching = async () => {
			const searchResult = await getMoviesBySearch(query);
			if (searchResult === undefined) return;
			setMovies(searchResult);
		};
		if (query !== "") {
			getMoviesBySearching();
		}
	}, [query]);

	useEffect(() => {
		const getUpcoming = async () => {
			const result = await getUpcomingMovies(pageNumber);
			setMovies(result ?? []);
		};
		if (upcoming) getUpcoming();
	}, [upcoming, pageNumber]);

	useEffect(() => {
		const getTrending = async () => {
			const result = await getTrendingMovies(pageNumber);
			setMovies(result ?? []);
		};
		getTrending();
	}, [trendingButton, pageNumber]);

	return (
		<>
			<SearchBar search={setQuery} />
			<main id="main">
				<CategoriesList
					getCategory={getClickedCategory}
					getPageNumber={setPageNumber}
					getMovies={handleAllMoviesClicked}
					getUpcoming={handleUpcomingClicked}
					getTrending={handleTrendingButtonClicked}
				/>
				<div className="movie_and_pagination_container">
					<MoviesList
						pageNumber={setPageNumber}
						movies={movies}
					/>
					<Pagination
						getPageNumber={setPageNumber}
						pageNumber={pageNumber}
					/>
				</div>
			</main>
		</>
	);
};
