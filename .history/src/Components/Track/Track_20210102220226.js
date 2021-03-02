import React from 'react'

import './Track.css'


class Track extends React.Component {
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