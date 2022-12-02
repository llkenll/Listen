import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import Feed from '../feed';

import Library from '../library/index';
import Party from '../party';
import Player from '../player';
import './home.css';
import Login from '../auth/login';
import { setClientToken } from '../../spotify';
export default function Home() {

    const [token, setToken] = useState("");


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

        setToken(token);
        setClientToken(token);

    }, [])

    const logout = () =>{
        setToken("");
        window.localStorage.removeItem("token");
    }

   


    return(

        !token?<Login/> :
            <Router>
                <div className = "main-body">
                
                <Sidebar logout = {logout}/>
            <Routes>
                <Route path="/player" element ={<Player acessTok={token}/>}/>
                <Route path = "/" element={<Library/>}/>
                {/* <Route path="/feed" element ={<Feed/>}/>*/}
                {/*<Route path="/party" element ={<Party/>}/>*/}
               
            </Routes>
            </div>
        </Router>
    )
}