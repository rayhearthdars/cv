import axios from "axios";
import { Movie } from "../models/movie";

const API = process.env.REACT_APP_API_KEY;

export const getMovieById = async (id: string | undefined) => {
	if (id == null) return;
	const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API}`;
	let result;
	try {
		result = await axios.get(url).then((res) => res.data);
	} catch (err) {
		console.error(err);
	}
	return result;
};

export const getMoviesByCategory = async (category: number | undefined, pageNumber: number | undefined) => {
	if (category == null) return;
	if (pageNumber == null) return;
	const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API}&with_genres=${category}&page=${pageNumber}`;
	let result;
	try {
		result = await axios.get(url).then((res) => res.data);
	} catch (err) {
		console.error(err);
	}
	return result.results;
};

export const getAllMovies = async (pageNumber: number | undefined) => {
	if (pageNumber == null) return;
	const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API}&page=${pageNumber}`;
	try {
		return axios.get<{ results: Movie[] }>(url).then((res) => res.data.results);
	} catch (err) {
		console.error(err);
	}
};

export const getMoviesBySearch = async (query: string | undefined) => {
	if (query == null) return;
	const url = `https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${query}`;
	try {
		return axios.get<{ results: Movie[] }>(url).then((res) => res.data.results);
	} catch (err) {
		console.error(err);
	}
};

export const getUpcomingMovies = async (pageNumber: number | undefined) => {
	const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API}&page=${pageNumber}`;
	try {
		return axios.get<{ results: Movie[] }>(url).then((res) => res.data.results);
	} catch (err) {
		console.error(err);
	}
};

export const getTrendingMovies = async (pageNumber: number | undefined) => {
	const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API}&page=${pageNumber}`;
	try {
		return axios.get<{ results: Movie[] }>(url).then((res) => res.data.results);
	} catch (err) {
		console.error(err);
	}
};
