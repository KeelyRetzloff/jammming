import React from 'react'

import './searchbar'

class SearchBar extends React.Component {
    render() {
    return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" />
            <button class="SearchButton">SEARCH</button>
        </div>
    );
    }
}

export default SearchBar