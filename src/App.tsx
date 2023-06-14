import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Header } from './components/Header';
import { Details } from "./pages/details/Details";
import { HomePage } from "./pages/home/HomePage";
import { Header } from "./components/Header";

function App() {


	return (
		<Router>
			<Header />
			<Routes>
				<Route
					path=""
					element={<HomePage />}
				/>
				<Route
					path={`/details/:movieId`}
					element={<Details />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
