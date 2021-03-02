import React from 'react'

const accessToken;



class Spotify extends React.Component {
    getAccessToken() {
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