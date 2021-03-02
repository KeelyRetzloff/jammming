
import React from 'react'

import './searchresults.css'
import TrackList from '../Trac'

class SearchResults extends React.Component {
    render() {
    return (
            <div className="SearchResults">
            <h2>Results</h2>
            <TrackList SearchResults={this.state.SearchResults} />
            </div>
    );
    }
}

export default SearchResults