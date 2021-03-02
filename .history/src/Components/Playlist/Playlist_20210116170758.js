import React from 'react'

import './playlist.css'
import TrackList from '../TrackList/TrackList'

class Playlist extends React.Component {
  handleNameChange(e) {
    
  }

    render() {
    return (
        <div className="Playlist">
        <input defaultValue={this.props.playlistName} onChange={this.handleNameChange} />
        <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
    }
}

export default Playlist