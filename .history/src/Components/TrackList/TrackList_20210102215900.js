import React from 'react'

import './tracklist.css'

class TrackList extends React.Component {
    render() {
    return (
        <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
    }
}

export default TrackList