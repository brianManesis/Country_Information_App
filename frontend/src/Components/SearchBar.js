import {React} from "react";

/**
 * React component which renders search bar.
 * @param {search,setSearch} search state, and setSearch. 
 * @returns search bar where value updates search state.
 */
const SearchBar = ({search,setSearch})=>{
    return (
        <div className="SearchBarContainer">
            <h1 className="Header">Search Country</h1>
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