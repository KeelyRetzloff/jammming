import React from 'react'

import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import Spotify from '../../util/Spotify'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [{song:'s1', artist:'ar1', album:'al1', id:1},
      {song:'s2', artist:'ar2', album:'al2', id:2},
      {song:'s3', artist:'ar3', album:'al3', id:3}],
      playlistName: 'My Playlist',
      playlistTracks: [{song:'ps1', artist:'par1', album:'pal1', id:4},
      {song:'ps2', artist:'par2', album:'pal2', id:5},
      {song:'ps3', artist:'par3', album:'pal3', id:6}]
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    this.state.playlistTracks.push(track);
    this.setState({playlistTracks: this.state.playlistTracks});
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistTrackstrackURIs).then();
  }

  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults})
    });
  }

  render() {
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={this.search}/>
        <div className="App-playlist">
        <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
        <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
        </div>
      </div>
    </div>
  );
  }
}

export default App;
