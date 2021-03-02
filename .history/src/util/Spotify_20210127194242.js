

let accessToken;

const clientID = '6e0fc63d8fa64d3b9d5df093c649b645';
const redirectURI = 'http://KeelyIsJammming.surge.sh';


const Spotify = {
    getAccessToken() {
        if(accessToken) {return accessToken;} 
        if (!accessToken) {
            const accessTokenMatch = window.location.href.match('/access_token=([^&]*)/');
            const expiresInMatch = window.location.href.match('/expires_in=([^&]*)/');

            if(accessTokenMatch && expiresInMatch) {
                accessToken = accessTokenMatch[1];
                const expiresIn = Number(expiresInMatch[1]);
                window.setTimeout(() => accessToken = '', expiresIn * 1000);
                window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
                return accessToken;
            } else {
                const accessURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
                window.location = accessURL;
            }
        }

    },
    search(searchTerm) {
        const accessToken = Spotify.getAccessToken();
        const searchURI = `https://api.spotify.com/v1/search?type=track&q=${searchTerm}`;
        
        return fetch(searchURI, {
            headers: {Authorization: `Bearer ${accessToken}`}
        }).then(response => {
            return response.json();
        }).then(data => {
            if(!data.tracks) {
                return [];
            } 
            return data.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }))
        })
    },
    savePlaylist(playlistName, trackURIsArray) {
        const accessToken = Spotify.getAccessToken();
        const headers = {Authorization: `Bearer ${accessToken}`};
        const headersPOST = { 
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json' 
        };
        let userID;
        if(!playlistName || !trackURIsArray.length) {
            return;
        } return fetch('https://api.spotify.com/v1/me', {headers: headers})
            .then(response => response.json())
            .then(data => {
                userID = data.id;
                return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
                    headers: headersPOST,
                    method:'POST', 
                    body: JSON.stringify({ playlistName: playlistName })
                }).then(response => response.json())
                .then(data => {
                    let playlistID;
                    playlistID = data.id;
                    return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`, {
                        headers: headersPOST,
                        method: 'POST',
                        body: JSON.stringify({ uris: trackURIsArray })
                    });
                });
                
            }).catch(err => console.log(err)); 
    }

}

export default Spotify