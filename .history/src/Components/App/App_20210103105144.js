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
      {song:'s3', artist:'ar3', album:'al1', id:3}
    ]};
  }
  render() {
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
        <SearchResults />
        <Playlist />
        </div>
      </div>
    </div>
  );
  }
}

export default App;
