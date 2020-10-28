import React, { useEffect, useRef } from "react";
import useGlobalState from "hooks/useGlobalState";

const CurrentlyPlaying = () => {
  const {
    isPlaying,
    playlist,
    setPlaylist,
    playlistPosition,
    setPlaylistPosition,
  } = useGlobalState();

  const audioRef = useRef();

  useEffect(() => {
    if (playlist.length > 0 && isPlaying) {
      audioRef.current.play();
    }

    if (!isPlaying) {
      audioRef.current.pause();
    }
  }, [playlistPosition, isPlaying]);

  const onEnded = () => {
    // set currently selected song to next in playlist
    setPlaylistPosition(playlistPosition + 1);
  };

  const playNext = () => {
    setPlaylistPosition(playlistPosition + 1);
  };

  const playPrevious = () => {
    setPlaylistPosition(playlistPosition - 1);
  };

  const currSong = playlist?.[playlistPosition];

  return (
    <div style={{ padding: 20, backgroundColor: "#DCDDDE", borderRadius: 5 }}>
      <p>Currently playing</p>
      <p>is playing: {isPlaying ? "true" : "false"}</p>
      <p>Song name: {currSong?.meta?.title}</p>
      <details>
        <summary>Lyrics</summary>
        <p style={{ whiteSpace: "pre-line" }}>{currSong?.meta?.lyrics_cn}</p>
      </details>
      <audio
        controls
        src={currSong?.meta?.audio}
        ref={audioRef}
        onEnded={onEnded}
      />
      <p>Prev songs:</p>
      {playlist.slice(0, playlistPosition).map((s) => s?.meta?.title)}
      <p>next songs:</p>
      {playlist.slice(playlistPosition + 1).map((s) => s?.meta?.title)}
      <br />
      <button onClick={playPrevious} disabled={playlistPosition === 0}>
        play previous
      </button>
      <button
        onClick={playNext}
        disabled={playlistPosition === playlist.length - 1}
      >
        play next
      </button>
    </div>
  );
};

export default CurrentlyPlaying;
