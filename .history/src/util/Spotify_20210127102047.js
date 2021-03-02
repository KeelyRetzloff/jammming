import React from 'react'

const accessToken;
const clientID



class Spotify extends React.Component {
    getAccessToken(url) {
        if(accessToken) {
            return accessToken;
        } 
        if (!accessToken) {
            window.location.href.match('/access_token=([^&]*)/');
            window.location.href.match('/expires_in=([^&]*)/');
            
        }
    }



}



export default Spotify