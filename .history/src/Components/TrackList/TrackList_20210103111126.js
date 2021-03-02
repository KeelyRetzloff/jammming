import React from 'react'

import './tracklist.css'

class TrackList extends React.Component {
    render() {
    return (
        <div className="TrackList">
                  {numbers.map((number) =>        <ListItem key={number.toString()}                  value={number} />      )}
        </div>
    );
    }
}

export default TrackList