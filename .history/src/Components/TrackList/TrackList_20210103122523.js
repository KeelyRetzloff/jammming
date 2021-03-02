import React from 'react'

import './tracklist.css'

import Track from '../Track/Track'

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                    { if(this.props.tracks) 
                        this.props.tracks.map(track => {
                        return <Track track={track} key={track.id} />     
                        })
                    }
            </div>
        );
    }
}

export default TrackList