import React from 'react'

import './tracklist.css'

import Track from '../Track/Track'

class TrackList extends React.Component {
    render() {
        if(this.props.tracks) {
            var trackslist = this.props.tracks.map(track => {
            return <Track track={track} key={track.id} />     
            })
        }
        return (
            <div className="TrackList">
                    { tracksList
                    }
            </div>
        );
    }
}

export default TrackList