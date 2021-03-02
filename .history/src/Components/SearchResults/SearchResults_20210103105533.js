
import React from 'react'

import './searchresults.css'
import TrackList from '../TrackList/TrackList'

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