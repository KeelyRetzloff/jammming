import React from 'react'

import './searchbar.css'

class SearchBar extends React.Component {
    constructor()
    search() {
        this.props.onSearch = this.state.term;
    }

    render() {
    return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" />
            <button className="SearchButton">SEARCH</button>
        </div>
    );
    }
}

export default SearchBar