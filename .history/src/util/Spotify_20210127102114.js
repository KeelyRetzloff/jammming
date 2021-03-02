import React from 'react'

const accessToken;
const clientID ='6e0fc63d8fa64d3b9d5df093c649b645';




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