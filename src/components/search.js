import React from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';
import PropTypes from "prop-types";
const Search = props => {
    return (
        <form className="form-inline active-cyan-4">
            <input className="form-control form-control-sm w-75" type="text" placeholder="Search"
                aria-label="Search" onChange={(e) => this.searchNews(e.target.value)}/>
                <button type="submit" class="searchButton">
                    <i class="fa fa-search"></i>
                </button>
        </form>
    );
}
Search.propTypes = {
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
};
export default Search;