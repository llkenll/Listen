import React from 'react';
import { useEffect, useState} from 'react';
import { searchArtists } from './actions/artists';
import { useDispatch, useSelector } from 'react-redux';


import Home from './screens/home/index'
const App = () => {

    const dispatch = useDispatch();

    const [token, setToken] = useState("");

    const [searchKey, setSearchKey] = useState("");

    const [artists, setArtists] = useState([]);

    const [userId, setUserId] =  useState("");


    useEffect(()=>{
        dispatch(searchArtists());

    },[dispatch]);

    const logout = () =>{
        setToken("");
        window.localStorage.removeItem("token");
    }



    return(
        <div>
            <Home></Home>

        </div>

            
    );
}




export default App;