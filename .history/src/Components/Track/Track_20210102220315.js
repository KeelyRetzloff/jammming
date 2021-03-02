import React from 'react'

import './Track.css'


class Track extends React.Component {
    render() {
    return (
        <div className="Track">
        <div className="Track-information">
            <h3></h3>
            <p></p>
        </div>
        <button className="Track-action"><!-- + or - will go here --></button>
        </div>
    );
    }
}

export default Track