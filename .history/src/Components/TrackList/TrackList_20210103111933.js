import React from 'react'

import './tracklist.css'
import Track from '../Track/Track'

class TrackList extends React.Component {
    render(props) {
    return (
        <div className="TrackList">
                {this.props.tracks.map((track) =>
                  <Track key={track.id} />     
                )}
        </div>
    );
    }
}

export default TrackList