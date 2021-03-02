import React from 'react';

import './searchbar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
          };

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }
    search() {
        this.props.onSearch(this.state.term);
    }

    handleTermChange(e) {
        this.setState({term: e.target.value});
    }

    render() {
    return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
            <button onClick={this.search} className="SearchButton">SEARCH</button>
        </div>
    );
    }
}

export default SearchBar;



class SearchBar extends React.Component {



  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
        <a onClick={this.search}>SEARCH</a>
      </div>
    );
  }
}

