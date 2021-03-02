import React from 'react'

import './playlist.css'

class Playlist extends React.Component {
    render() {
    return (
        <div class="Playlist">
        <input value="New Playlist"/>
        <!-- Add a TrackList component -->
        <button class="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
    }
}

export default Playlist