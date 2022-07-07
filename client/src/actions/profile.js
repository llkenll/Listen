import axios from 'axios'

import * as api from '../api';



export const getProfile = (token) => async (dispatch) =>{


    try {
        // const action = {type:'FETCH_ALL', payload:[]}
        // dispatch(action);
       
        const { data } = await api.getProfile(token);
        dispatch({type: "FETCH PROFILE", payload: data})
    } catch (error) {
        console.log(error);
    }
   
}