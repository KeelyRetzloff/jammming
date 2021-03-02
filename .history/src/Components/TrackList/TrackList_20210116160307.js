import React from 'react'

import './tracklist.css'

import Track from '../Track/Track'

class TrackList extends React.Component {
    render() {
        if(this.props.tracks) {
            var trackslist = this.props.tracks.map(track => {
            return <Track track={track} key={track.id} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval= /> })}
        else {
            return null;
        }
        return (
            <div className="TrackList">
                { trackslist }
            </div>
        );
    }
}

export default TrackList