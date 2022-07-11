import React, { useState, useRef, useEffect } from "react";
import "./audioPlayer.css";
import Controls from "./controls";
import ProgressCircle from "./progressCircle";
import WaveAnimation from "./waveAnimation";

import Player from "../../player";

export default function AudioPLayer2({
  currentSong
}) {

    const [isPlaying, setIsPlaying] = useState(false);
    const artists = [];
  // currentSong.artists.name.forEach((artist) => {
  //   artists.push(artist.name);
  // });
  
  return (
    
    <div className="player-body flex">
      <div className="player-left-body">
        <ProgressCircle
          isPlaying={true}
          image={currentSong.image}
          size={300}
          color="#C96850"
        />
      </div>
      <div className="player-right-body flex">
        <div>
            <p className="song-title">{currentSong.name}</p>
        </div>
        
        <p className="song-artist">{artists.join(" | ")}</p>
        <div className="player-right-bottom flex">
          <div className="song-duration flex">
            <WaveAnimation isPlaying={isPlaying} />
          </div>

          
        </div>
      </div>
    </div>
  );
}