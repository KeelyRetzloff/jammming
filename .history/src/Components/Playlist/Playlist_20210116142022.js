import React from 'react'

import './playlist.css'
import TrackList from '../TrackList/TrackList'

class Playlist extends React.Component {
    render() {
    return (
        <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        <TrackList play/>
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
    }
}

export default Playlist