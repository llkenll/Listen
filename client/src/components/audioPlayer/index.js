import React, { useState, useRef, useEffect } from "react";
import "./audioPlayer.css";
import Controls from "./controls";
import ProgressCircle from "./progressCircle";
import WaveAnimation from "./waveAnimation";

import Player from "../../player";

export default function AudioPLayer({
  currentTrack,
  currentIndex,
  setCurrentIndex,
  total,
  accessToken,
  songUri,
  len,
  setNextTrack
 
}) {

    const [isPlaying, setIsPlaying] = useState(false);
    const artists = [];
  currentTrack?.album?.artists.forEach((artist) => {
    artists.push(artist.name);
  });

  
  return (
    <div className="player-body flex">
      <div className="player-left-body">
        <ProgressCircle
          isPlaying={true}
          image={currentTrack?.album?.images[0]?.url}
          size={300}
          color="#C96850"
        />
      </div>
      <div className="player-right-body flex">
        <div>
            <p className="song-title">{currentTrack?.name}</p>
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