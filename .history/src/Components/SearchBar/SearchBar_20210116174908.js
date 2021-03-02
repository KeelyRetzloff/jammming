import React from 'react'

import './searchbar.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }
    search() {
        this.props.onSearch(this.state.term);
    }

    handleTermChange(e) {
        this.props.onTermChange(e.target.value);
    }

    render() {
    return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange} />
            <button className="SearchButton">SEARCH</button>
        </div>
    );
    }
}

export default SearchBar