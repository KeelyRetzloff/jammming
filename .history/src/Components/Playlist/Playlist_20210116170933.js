import React from 'react'

import './playlist.css'
import TrackList from '../TrackList/TrackList'

class Playlist extends React.Component {
  constructor(props) {
    super(props);

  }
  handleNameChange(e) {
    e.preventDefault();

    e.onNameChange
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