import axios from 'axios';

const url = 'https://api.spotify.com/v1/search';

const token = window.localStorage.getItem("token");


export const fetchArtists = (token, searchKey) => axios.get("https://api.spotify.com/v1/search",{
            headers:{
                Authorization: `Bearer ${token}`
            },

            params:{
                q:searchKey,
                type:"artist"
            }
        })



export const getProfile = (token) => axios.get("https://api.spotify.com/v1/me",{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })


export const fetchPlaylist = (token, userId) => axios.get(`https://api.spotify.com/v1/users/${userId}/playlists`,{
    
    headers:{
        Authorization: `Bearer ${token}`
    }
})


// const searchArtists = async (e) => {
    //     e.preventDefault();
    //     const {data} = await axios.get("https://api.spotify.com/v1/search",{
    //         headers:{
    //             Authorization: `Bearer ${token}`
    //         },

    //         params:{
    //             q:searchKey,
    //             type:"artist"
    //         }
    //     })

    //     setArtists(data.artists.items);
    // }