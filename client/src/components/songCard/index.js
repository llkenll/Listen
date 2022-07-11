import React from "react";
import AlbumImage from "./albumImage";
import AlbumInfo from "./albumInfo";
import "./songCard.css";

export default function SongCard({ album, currentSong, length}) {
  return (
    album?.images[0]?.url?
    <div className="songCard-body flex">
      <AlbumImage url={album?.images[0]?.url} />
      <AlbumInfo album={album} currentSong={currentSong} />
    </div> :(

      <div className="songCard-body flex">
      <AlbumImage url={currentSong.image} />
      <AlbumInfo album={album} currentSong={currentSong} length={length} />
    </div>


    )
  );
}