import React from 'react'

import './Track.css'


class Track extends React.Component {
    constructor(props) {
        super(props);

        this.addTrack = this.addTrack.bind(this);
    }
    
    renderAction() {
        let isRemoval = false;
        if(isRemoval) {
            return <button className="Track-action">-</button>;
        } else {
            onClick={this.addTrack}
        }
    }

    addTrack() {
        this.props.onAdd(this.props.track);
    }

    render() {
    return (
        <div className="Track">
        <div className="Track-information">
            <h3>{this.props.track.song}</h3>
            <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {this.renderAction}
        </div>
    );
    }
}

export default Track