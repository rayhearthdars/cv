import React from "react";
import "./SearchBar.css";

type SearchBarProps = {
  search: (search:string) => void;
}

export const SearchBar = ({search}:SearchBarProps) => {

    return (
      <input
onChange={(e) => search(e.currentTarget.value)} 
        placeholder='Search...'
        className="search_bar"
      />)
  }