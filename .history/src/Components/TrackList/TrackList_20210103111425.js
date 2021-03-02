import React from 'react'

import './tracklist.css'
import Track from 

class TrackList extends React.Component {
    render() {
    return (
        <div className="TrackList">
                {this.props.tracks.map((track) =>
                  <Track key={track.id} 
                   song={track.song}
                   artist={track.artist}
                   album={track.album} />     
                )}
        </div>
    );
    }
}

export default TrackList