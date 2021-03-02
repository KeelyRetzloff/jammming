import React from 'react'

import './tracklist.css'

import Track from '../Track/Track'

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                    {
                        this.props.searc.map((track) => {
                        return <Track track={track} key={track.id} />     
                        })
                    }
            </div>
        );
    }
}

export default TrackList