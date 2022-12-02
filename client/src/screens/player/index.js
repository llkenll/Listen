import React, { useEffect, useState } from "react";
import "./player.css";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";
import SongCard from "../../components/songCard";
import Queue from "../../components/queue";
import AudioPLayer from "../../components/audioPlayer";
import Player2 from "../../player";
import {useDispatch} from 'react-redux';
import axios from "axios";
import { addSong } from "../../actions/artists";

import AudioPlayer2 from "../../components/audioPlayer2";
// import Widgets from "../../components/widgets";

export default function Player({acessTok}) {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const [currentImage, setCurrentImage] = useState("");
  const [currentSong, setCurrentSong] = useState({});


  const [goNext, setNextTrack] = useState(false);

  const [deviceId, setDeviceId] = useState("");

  const [to, setTo] = useState("");

  const dispatch = useDispatch();

  const len = tracks.length
  useEffect(()=>{
    console.log(goNext);
    if(goNext == true){
      if(currentIndex < len-1){
        setCurrentIndex(currentIndex+1)

      }else{
        setCurrentIndex(0)
      }
    }
    
  }, goNext)

  const songUrl = "spotify:track:3sslYZcFKtUvIEWN9lADgr"


  const add = async () => {

    // dispatch(addSong(acessTok,deviceId, songUrl));
    try {
      const url = `https://api.spotify.com/v1/me/player/queue?uri=${songUrl}&device_id=${deviceId}`;
      console.log(url);
      console.log(deviceId);

      await axios.post(url, {
        headers: {
          Authorization: `Bearer ${to}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
   
}
 // const addToQueue = async ()=>{
  //   console.log("runs");
  //   apiClient
  //   .patch("me/player/queue?url=" + songUrl+ "&device_id="+deviceId)
  // }
 
  // useEffect(()=>{
   
  // },[])

  useEffect(() => {
    if (location.state) {
      let token = window.localStorage.getItem("token")
      setTo(token);
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTracks(res.data.items);
          setCurrentTrack(res.data?.items[0]?.track);
        });
    }
  }, [location.state]);

  useEffect(() => {
   
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);




  const getUris = ()=>{
    const Uris = [];
    for(let i = currentIndex; i < tracks.length; i++){
      Uris.push(tracks[i]?.track?.uri)
    }   
    return Uris;
  }
 



  return (
    <div className="screen-container flex">
      <div className="left-player-body">
        <AudioPlayer2 currentSong={currentSong}/>
          
        <div className="player">
          <Player2 accessToken={acessTok} trackUri={tracks[currentIndex]?.track?.uri} len ={len} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} setNext={setNextTrack} 
          setDeviceId={setDeviceId}
          setCurrentImage= {setCurrentImage}
          setCurrentSong = {setCurrentSong} 
          
          />
          
        </div>
        
        
        {/* <Widgets artistID={currentTrack?.album?.artists[0]?.id} /> */}
      </div>
      <div className="right-player-body">
        <SongCard album={currentTrack?.album} currentSong ={currentSong}/>
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
        
      </div>
    </div>
  );
}