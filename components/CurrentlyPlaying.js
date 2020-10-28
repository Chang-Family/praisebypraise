import React, { useEffect, useRef } from "react";
import useGlobalState from "hooks/useGlobalState";

const CurrentlyPlaying = () => {
  const {
    isPlaying,
    currentlyPlayingSong,
    nextSongs,
    setNextSongs,
    setCurrentlyPlayingSong,
  } = useGlobalState();

  const audioRef = useRef();

  useEffect(() => {
    if (currentlyPlayingSong && isPlaying) {
      audioRef.current.play();
    }

    if (!isPlaying) {
      audioRef.current.pause();
    }
  }, [currentlyPlayingSong, isPlaying]);

  const onEnded = () => {
    // set currently selected song to next in queue
    const upNextSong = nextSongs.shift();
    setCurrentlyPlayingSong(upNextSong);
    setNextSongs(nextSongs);
  };

  return (
    <div style={{ padding: 20, backgroundColor: "#DCDDDE", borderRadius: 5 }}>
      <p>Currently playing</p>
      <p>is playing: {isPlaying ? "true" : "false"}</p>
      <p>Song name: {currentlyPlayingSong?.meta?.title}</p>
      <details>
        <summary>Lyrics</summary>
        <p style={{ whiteSpace: "pre-line" }}>
          {currentlyPlayingSong?.meta?.lyrics_cn}
        </p>
      </details>
      <audio
        controls
        src={currentlyPlayingSong?.meta?.audio}
        ref={audioRef}
        onEnded={onEnded}
      />
      <p>Up next songs:</p>
      {nextSongs.map((s) => s?.meta?.title)}
    </div>
  );
};

export default CurrentlyPlaying;
