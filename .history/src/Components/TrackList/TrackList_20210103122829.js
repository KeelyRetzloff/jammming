import React from 'react'

import './tracklist.css'

import Track from '../Track/Track'

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                    { trackList
                    }
            </div>
        );
    }
}

export default TrackList