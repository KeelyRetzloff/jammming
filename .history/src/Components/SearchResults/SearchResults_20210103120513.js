
import React from 'react'

import './searchresults.css'
import TrackList from '../TrackList/TrackList'

class SearchResults extends React.Component {
    render() {
    return (
            <div className="SearchResults">
            <h2>Results</h2>
            <TrackList tracks={this.newMethod()} />
            </div>
    );
    }

    newMethod() {
        return this.props.searchResults;
    }
}

export default SearchResults