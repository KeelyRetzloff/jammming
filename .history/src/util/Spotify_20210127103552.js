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
            if() {}
            const accessToken = window.location.href.match('/access_token=([^&]*)/');
            constwindow.location.href.match('/expires_in=([^&]*)/');
            
        }
    }



}



export default Spotify