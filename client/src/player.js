import { useState, useEffect } from "react"
import SpotifyPlayer from "react-spotify-web-playback"

export default function Player({ accessToken,trackUri, len, currentIndex, setCurrentIndex, setNext, setDeviceId, setCurrentImage, setCurrentSong}) {
  const [play, setPlay] = useState(false)


  const [index, setIndex] = useState(0);
  useEffect(() => setPlay(true), [trackUri])


  useEffect(()=> {
    console.log(trackUri);
  }
  ,currentIndex)




  if (!accessToken) return null
  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      callback={state => {
        if (!state.isPlaying){
          setPlay(false)
          setIndex(index+1);
        }
        setDeviceId(state.currentDeviceId);
        setCurrentSong(state.track);
        console.log(state.track);
        // console.log(state)
        
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
      
      
    />
  )
}