import {React} from "react";

const SearchBar = ({search,setSearch})=>{
    
    return (
        <div className="SearchBarContainer">
            <h1>Search Country</h1>
            <div className="search">
                <input
                value={search}
                id="searchBar"
                placeholder="search country"
                onChange={e=> setSearch(e.target.value)}
                label="Search"
                />
            </div>
        </div>
    );
}
export {SearchBar};