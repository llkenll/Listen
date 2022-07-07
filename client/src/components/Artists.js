import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect, useState} from 'react';

const Artists = () => {
    const arts = useSelector((state) => state.artists);

  

    return (
     
        (arts.map(artist => (
            <div key = {artist.id}>
                {artist.images.length ? <img width = {"30%"} src = {artist.images[0].url} alt = ""/>: <div> No Image</div>}
                {artist.name}
            </div> )))
    );
  };



export default Artists