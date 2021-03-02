
const clientID = '6e0fc63d8fa64d3b9d5df093c649b645';
const redirectURI = 'http://keelyisjammming.surge.sh/';

let accessToken;


const Spotify = {

    getAccessToken() {
        if (accessToken) {
            return accessToken;
          }
          const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
          const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

          if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/'); 
            return accessToken;
        } else {
            window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
        }
    },
    search(searchTerm) {
        const createdAccessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, {
            headers: {
                Authorization: `Bearer ${createdAccessToken}`
              }
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
            }));
        });
    },

    savePlaylist(playlistName, trackURIsArray) {
        
        if(!playlistName || !trackURIsArray.length) {
            return;
        }
        
        const accessToken = Spotify.getAccessToken();
        const headers = {Authorization: `Bearer ${accessToken}`};
        const headersPOST = { 
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json' 
        };
        let userID;
        
        return fetch('https://api.spotify.com/v1/me', {headers: headers})
            .then(response => response.json())
            .then(data => {
                userID = data.id;
                return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
                    headers: headersPOST,
                    method:'POST', 
                    body: JSON.stringify({ name: playlistName })
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
              });
            }
          };
          

export default Spotify;

