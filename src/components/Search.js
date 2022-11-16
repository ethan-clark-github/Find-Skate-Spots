//search 
import React from "react";

function Search({ setSearch }) {
    function handleChange(e) {
        console.log(setSearch)
        setSearch(e.target.value)

    }
    return (
        <div className="search">
            <input type="text" className="searchTerm" onChange={handleChange} placeholder="Search By Name" />
        </div>
    );
}

export default Search;