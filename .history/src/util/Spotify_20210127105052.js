import React from 'react'

let accessToken;

const clientID ='6e0fc63d8fa64d3b9d5df093c649b645';
const redirect_uri = "http://localhost:3000/";




class Spotify extends React.Component {
    getAccessToken() {
        if(accessToken) {
            return accessToken;
        } 
        if (!accessToken) {
            const accessTokenMatch = window.location.href.match('/access_token=([^&]*)/');
            const expiresInMatch = window.location.href.match('/expires_in=([^&]*)/');
            if(accessTokenMatch && expiresInMatch) {
                accessToken = accessTokenMatch[1];
                let expiresIn = expiresInMatch[1];
            }
            
        }
    }



}



export default Spotify