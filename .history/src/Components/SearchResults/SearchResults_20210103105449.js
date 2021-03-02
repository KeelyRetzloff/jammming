
import React from 'react'

import './searchresults.css'

class SearchResults extends React.Component {
    render() {
    return (
            <div className="SearchResults">
            <h2>Results</h2>
            <TrackList SearchResults={this.state}
            </div>
    );
    }
}

export default SearchResults