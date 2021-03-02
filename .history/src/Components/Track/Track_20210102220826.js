import React from 'react'

import './Track.css'


class Track extends React.Component {
    renderAction() {
        if(isRemoval) {
            return ''
        }
    }

    render() {
    return (
        <div className="Track">
        <div className="Track-information">
            <h3>Track Name</h3>
            <p>Track Artist | Track Album</p>
        </div>
        <button className="Track-action">+ / -</button>
        </div>
    );
    }
}

export default Track