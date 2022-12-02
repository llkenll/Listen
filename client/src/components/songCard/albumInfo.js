import React from "react";
import "./albumInfo.css";

export default function AlbumInfo({ album, currentSong, length }) {
  const artists = [];

  if(currentSong != null){

    try {
      for(let i = 0 ; i < currentSong.artists.length; i++){
      
        artists.push(currentSong.artists[i].name);
      }
    } catch (error) {
      
    }
    
    
  }

  
  

 

  return (
    <div className="albumInfo-card">
      <div className="albumName-container">
        <div className="marquee">
          <p>{currentSong.name + " - " + artists?.join(", ")}</p>
        </div>
      </div>
      <div className="album-info">
        <p>{`${currentSong.name} is a song by ${artists?.join(
          ", "
        )} 
        `}</p>
      </div>
      <div className="album-release">
        {/* <p>Release Date: {album?.release_date}</p> */}
      </div>
    </div>

  
  );
}



{/* <div className="albumInfo-card">
<div className="albumName-container">
  <div className="marquee">
    <p>{currentSong.name + " - " + artists?.join(", ")}</p>
  </div>
</div>
<div className="album-info">
  <p>{`${currentSong.name} is an ${album?.album_type} by ${artists?.join(
    ", "
  )} 
  with ${album?.total_tracks} track(s)`}</p>
</div>
<div className="album-release">
  <p>Release Date: {album?.release_date}</p>
</div>
</div> */}

