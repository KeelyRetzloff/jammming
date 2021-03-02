
import React from 'react'

import './searchresults.css'
import TrackList from '../TrackList/TrackList'

class SearchResults extends React.Component {
    render() {
        const newLocal = this.props.searchResults;
    return (
            <div className="SearchResults">
            <h2>Results</h2>
            <TrackList tracks={newLocal} />
            </div>
    );
    }
}

export default SearchResults