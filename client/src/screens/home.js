import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Feed from './feed';

import Library from './library';
import Party from './party';
import Player from './player';
export default function home() {
    return(
        <Router>
            <Routes>
                <Route path = "/" element={<Library/>}/>
                <Route path="/feed" element ={<Feed/>}/>
                <Route path="/party" element ={<Party/>}/>
                <Route path="/player" element ={<Player/>}/>
            </Routes>
        </Router>
        
    )
}