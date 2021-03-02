import React from 'react'

import './playlist.css'
import TrackList from '.'

class Playlist extends React.Component {
    render() {
    return (
        <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        <TrackList />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
    }
}

export default Playlist