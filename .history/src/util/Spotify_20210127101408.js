import React from 'react'

const accessToken;
const URL;


class Spotify extends React.Component {
    getAccessToken() {
        if(accessToken) {
            return accessToken;
        } 
        if (!accessToken) {
            window.location.href.match('/access_token=([^&]*)/', '
            /expires_in=([^&]*)/');
        }
    }



}



export default Spotify