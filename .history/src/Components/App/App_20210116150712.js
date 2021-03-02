import React from 'react'

import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

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
      {song:'ps3', artist:'par3', album:'al3', id:6}]
    }

    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    this.state.playlistTracks.push(track);
    this.setState({playlistTracks: this.state.playlistTracks});
  }

  render() {
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
        <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}  />
        <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
        </div>
      </div>
    </div>
  );
  }
}

export default App;
