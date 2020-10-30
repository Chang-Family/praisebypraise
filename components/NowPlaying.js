import React, { useState, useEffect, useRef } from "react";
import useGlobalState from "hooks/useGlobalState";

import PlayIcon from "assets/icons/play.svg";
import SkipForwardIcon from "assets/icons/skip-forward.svg";
import SkipBackIcon from "assets/icons/skip-back.svg";

const convertSecondsToFormattedTime = (seconds) =>
  new Date(seconds * 1000).toISOString().substr(14, 5);

const NowPlaying = () => {
  const {
    isPlaying,
    playlist,
    setPlaylist,
    playlistPosition,
    setPlaylistPosition,
  } = useGlobalState();

  const [currentTime, setCurrentTime] = useState(null);
  const [duration, setDuration] = useState(null);

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

  useEffect(() => {
    setDuration(audioRef.current.duration);
  }, [audioRef?.current?.duration]);

  const onEnded = () => {
    playNext();
  };

  const playNext = () => {
    setPlaylistPosition(playlistPosition + 1);
  };

  const playPrevious = () => {
    setPlaylistPosition(playlistPosition - 1);
  };

  const onTimeUpdate = (e) => {
    setCurrentTime(e.currentTarget.currentTime);
  };

  const currSong = playlist?.[playlistPosition];

  return (
    <div
      style={{
        height: "100%",
      }}
    >
      {/* play button */}
      <div
        style={{
          backgroundColor: "#BD645A",
          padding: "20px",
        }}
        className="flex justify-center"
      >
        <img src={PlayIcon} width="24" />
      </div>
      {/* next and prev buttons */}
      <div className="flex justify-between">
        <div
          className="flex justify-center"
          style={{
            padding: "10px",
            width: "100%",
            backgroundColor: "#BDC692",
            borderRight: "1px solid gray",
          }}
        >
          <img src={SkipBackIcon} width="24" />
        </div>
        <div
          className="flex justify-center"
          style={{
            padding: "10px",
            width: "100%",
            backgroundColor: "#BDC692",
          }}
        >
          <img src={SkipForwardIcon} width="24" />
        </div>
      </div>
      {/* time and duration */}
      <p>
        {convertSecondsToFormattedTime(currentTime ?? 0)} /{" "}
        {convertSecondsToFormattedTime(duration >= 0 ? duration : 0)}
      </p>

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
        onTimeUpdate={onTimeUpdate}
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

export default NowPlaying;
