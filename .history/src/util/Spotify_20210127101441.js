import React from 'react'

const accessToken;
const URL;


class Spotify extends React.Component {
    getAccessToken() {
        if(accessToken) {
            return accessToken;
        } 
        if (!accessToken) {
            window.location.href.match('/access_token=([^&]*)/');
            window.location.href.match('/access_token=([^&]*)/');
            
        }
    }



}



export default Spotify