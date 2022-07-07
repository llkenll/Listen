import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'
import { useEffect, useState} from 'react';
import {CLIENT_ID} from './constants'
import { searchArtists } from './actions/artists';
import { getProfile } from './actions/profile';
import { useDispatch, useSelector } from 'react-redux';
import Artists from './components/Artists';
import { getPlaylist } from './actions/playlist';
import WebPlayback from './components/WebPlayback'

import Home from './screens/home'
const App = () => {

    const dispatch = useDispatch();


    

   // const CLIENT_ID = '0cb45e573f8a450780d834e1f8d3a5fa'
    const REDIRECT_URL = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const [token, setToken] = useState("");

    const [searchKey, setSearchKey] = useState("");

    const [artists, setArtists] = useState([]);

    const [userId, setUserId] =  useState("");


    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        // getToken()


        if (!token && hash) {
            let urlParams = new URLSearchParams(window.location.hash.replace("#","?"))
            token = urlParams.get('access_token')
            
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])



    useEffect(()=>{
        dispatch(searchArtists());

    },[dispatch]);

    const logout = () =>{
        setToken("");
        window.localStorage.removeItem("token");
    }

   
    //use eeffect every time we re render we run this function
    //pass into array of variables, if either variable changes the function iwll run

    const getArtist = (e) => {
        e.preventDefault();

        dispatch(searchArtists(token, searchKey)) 

       
    }

    


    // setUserId(dispatch(getProfile(token)))


    const getProf = (e) => {
        dispatch(getProfile(token)) 
    }

    // const profileData = useSelector((state) => state.profile);

    // if(profileData){
    //     setUserId(profileData.id)
    // }

    const fetchProfile = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/me", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            
        })
        setUserId(data.id);
        console.log(userId);
    }


    const findPlaylist = () =>{
       
        dispatch(getPlaylist(token, userId)) 
    }
   


    return(
        <div>
            <h1>Spotify Listen</h1>
            <div>
                <Home></Home>
            </div>



            {!token ? 
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
            :<button onClick={logout}>Logout</button>

            }

            {/* {token?
                <form onSubmit={getArtist}>
                    <input type="text" onChange={e=>setSearchKey(e.target.value)}/>
                    <button type={"submit"}>Search</button>
                </form>
                :<h2>Please Login</h2>

            }


            {
                <button onClick={fetchProfile}>profile</button>
            }

            {
                 <button onClick={findPlaylist}>getPlaylist</button>
            }


            {/* {renderArtists()} */}
        
            </div>

            
    );
}



// const APIController = (function(){
//     const clientId = '';
//     const clientSecret = '';

//     const _getToken = async fetch('https://accounts.spotify.com/api/token');
// })();


export default App;