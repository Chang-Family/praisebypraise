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
    // if playlist is non-empty and isPlaying is set, play the source
    if (playlist.length > 0 && isPlaying) {
      audioRef.current.play();
    }

    // if the play state is toggled off, pause the audio
    if (!isPlaying) {
      audioRef.current.pause();
    }

    // run the effect every time the playlist position changes or the play state is toggled
  }, [playlistPosition, isPlaying]);

  const onEnded = () => {
    playNext();
  };

  const playNext = () => {
    setPlaylistPosition(playlistPosition + 1);
  };

  const playPrevious = () => {
    setPlaylistPosition(playlistPosition - 1);
  };

  const currSong = playlist?.[playlistPosition];

  return (
    <div style={{ height: "100%" }}>
      <p>{isPlaying ? "Currently Playing" : "No Song Added"}</p>
      <p>{currSong?.meta?.title}</p>
      <details>
        <summary>Lyrics</summary>
        <p
          style={{ whiteSpace: "pre-line" }}
          dangerouslySetInnerHTML={{ __html: currSong?.meta?.lyrics_cn }}
        ></p>
      </details>

      <audio
        style={{ visibility: "hidden" }}
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

      {/* go to previous song (don't go if at the end of list ) */}
      <button onClick={playPrevious} disabled={playlistPosition === 0}>
        play previous
      </button>

      {/* go to next song (don't go if at the end of list) */}
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
