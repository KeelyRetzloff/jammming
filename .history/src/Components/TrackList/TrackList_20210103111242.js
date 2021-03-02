import React from 'react'

import './tracklist.css'

class TrackList extends React.Component {
    render() {
    return (
        <div className="TrackList">
                {numbers.map((track) =>
                  <Track key={this.props.track.toString()} 
                   value={number} />     
                )}
        </div>
    );
    }
}

export default TrackList