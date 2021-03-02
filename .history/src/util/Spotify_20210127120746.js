import React from 'react'

let accessToken;

const clientID ='6e0fc63d8fa64d3b9d5df093c649b645';
const redirectURI = "http://localhost:3000/";




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
                const expiresIn = Number(expiresInMatch[1]);

                window.setTimeout(() => accessToken = '', expiresIn * 1000);
window.history.pushState('Access Token', null, '/');
                return accessToken;
            } else {
                const accessURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
                window.location = accessURL;
            }
        }

    }

    search(searchTerm) {
        const accessToken = Spotify.getAccessToken();
        const searchURI = `https://api.spotify.com/v1/search?type=track&q=${searchTerm}`;
        return fetch(searchURI, {
            headers: {Authorization: `Bearer ${accessToken}`}
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if(!data.tracks) {
                return [];
            } else {
            return data.items.tracks.map(track => ({
                ID: track.id,
                Name: track.name,
                Artist: track.artist,
                Album: track.album,
                UR: track.uri
            }));}
        });
    }

}



export default Spotify