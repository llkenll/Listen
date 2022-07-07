import axios from 'axios'

import * as api from '../api';



export const getPlaylist = (token, userId) => async (dispatch) =>{


    try {
        // const action = {type:'FETCH_ALL', payload:[]}
        // dispatch(action);
        
        const { data } = await api.fetchPlaylist(token, userId);
        dispatch({type: "FETCH PLAYLIST", payload: data})
        console.log(data);
    } catch (error) {
       
        console.log(error);
    }
   
}