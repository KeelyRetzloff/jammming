import React from 'react'

class SearchBar extends React.Component () {
    return (
        <div class="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" />
            <button class="SearchButton">SEARCH</button>
        </div>
    )
}

export SearchBar