import React from 'react'

import './Track.css'


class Track extends React.Component {
    
    renderAction() {
        let isRemoval = false;
        if(isRemoval) {
            return '-';
        } else {
            return '+';
        }
    }

    addTrack() {
        
    }

    render() {
    return (
        <div className="Track">
        <div className="Track-information">
            <h3>{this.props.track.song}</h3>
            <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <button className="Track-action">{this.renderAction()}</button>
        </div>
    );
    }
}

export default Track