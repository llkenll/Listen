import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import Feed from '../feed';

import Library from '../library/index';
import Party from '../party';
import Player from '../player';
import './home.css';
import Login from '../auth/login';
export default function home() {
    return(

        
            <Router>
                <div className = "main-body">
                <Login/>
                <Sidebar/>
            <Routes>
                <Route path = "/" element={<Library/>}/>
                <Route path="/feed" element ={<Feed/>}/>
                <Route path="/party" element ={<Party/>}/>
                <Route path="/player" element ={<Player/>}/>
            </Routes>
            </div>
        </Router>
       
        
        
    )
}