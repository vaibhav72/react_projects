import React, { useState, useEffect } from "react";

const Search = (props) => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    props.setSearchTerm(search);
  }, [search]);
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className="my-4">
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        onChange={handleSearchChange}
        value={search}
      ></input>
    </div>
  );
};

export default Search;
