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
  constructor(props) {
    super(props);



    this.handleTermChange = this.handleTermChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleTermChange(event) {
    this.setState({term: event.target.value});
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
        <a onClick={this.search}>SEARCH</a>
      </div>
    );
  }
}


