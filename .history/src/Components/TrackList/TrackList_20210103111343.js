import React from 'react'

import './tracklist.css'

class TrackList extends React.Component {
    render() {
    return (
        <div className="TrackList">
                {this.props.tracks.map((track) =>
                  <Track key={track.id} 
                   song={track}
                   artist= />     
                )}
        </div>
    );
    }
}

export default TrackList