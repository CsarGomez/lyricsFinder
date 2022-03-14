import React from "react";
import SearchForm from "./SearchForm";

const Header = ({ title, handleSearch }) => {
  return (
    <header>
      <h1>{title}</h1>
      <SearchForm handleSearch={handleSearch} />
    </header>
  );
};

export default Header;
