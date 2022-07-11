
import axios from 'axios'

import * as api from '../api';

export const searchArtists = (token, searchKey) => async (dispatch) =>{


    try {
        // const action = {type:'FETCH_ALL', payload:[]}
        // dispatch(action);
       

        const { data } = await api.fetchArtists(token, searchKey);
        dispatch({type: "FETCH_ALL", payload: data.artists.items})
    } catch (error) {
        console.log(error);
    }
   
}


export const addSong = (token, device_id, uri) => async(dispatch)=>{
    try {
        const {data} = await api.addSong(token, device_id, uri);
        dispatch({type:"ADD", payload:data});
    } catch (error) {
        console.log(error);
        
    }
}





//action creators 

// export const searchArtists = async (token, searchKey) => {
    
//     const {data} = await axios.get("https://api.spotify.com/v1/search",{
//         headers:{
//             Authorization: `Bearer ${token}`
//         },

//         params:{
//             q:searchKey,
//             type:"artist"
//         }
//     })

    

//     return Promise.resolve(data)

// }




