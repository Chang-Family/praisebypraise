import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import useGlobalState from "hooks/useGlobalState";

// icons
import PlayIcon from "assets/icons/play.svg";
import PauseIcon from "assets/icons/pause.svg";
import SkipForwardIcon from "assets/icons/skip-forward.svg";
import SkipBackIcon from "assets/icons/skip-back.svg";

const convertSecondsToFormattedTime = (seconds) =>
  new Date(seconds * 1000).toISOString().substr(14, 5);

const ControlButton = styled.div`
  /* center contents */
  display: flex;
  justify-content: center;
  /* give some breathing room */
  padding: ${(props) => props.padding ?? 10};
  width: 100%;
  /* color */
  background-color: ${(props) => props.backgroundColor};
  &:hover {
    cursor: pointer;
    filter: brightness(1.05);
  }
`;

const NowPlaying = () => {
  const {
    isPlaying,
    setIsPlaying,
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
    if (playlist.length > 0) {
      setPlaylistPosition(playlistPosition + 1);
      setIsPlaying(true);
    }
  };

  const playPrevious = () => {
    if (playlist.length > 0) {
      setPlaylistPosition(playlistPosition - 1);
      setIsPlaying(true);
    }
  };

  const onTimeUpdate = (e) => {
    setCurrentTime(e.currentTarget.currentTime);
  };

  const playPause = () => {
    if (playlist.length > 0) {
      setIsPlaying(!isPlaying);
    }
  };

  const currSong = playlist?.[playlistPosition];

  return (
    <div
      style={{
        height: "100%",
      }}
    >
      {/* play button */}

      {isPlaying ? (
        <ControlButton
          backgroundColor="#BD645A"
          padding="20px"
          onClick={playPause}
        >
          <img src={PauseIcon} width="24" />
        </ControlButton>
      ) : (
        <ControlButton
          backgroundColor="#BD645A"
          padding="20px"
          onClick={playPause}
        >
          <img src={PlayIcon} width="24" />
        </ControlButton>
      )}
      {/* next and prev buttons */}
      <div className="flex justify-between">
        <ControlButton
          backgroundColor="#BDC692"
          onClick={playPrevious}
          padding="10px"
        >
          <img src={SkipBackIcon} width="24" />
        </ControlButton>
        <ControlButton
          backgroundColor="#BDC692"
          onClick={playNext}
          padding="10px"
        >
          <img src={SkipForwardIcon} width="24" />
        </ControlButton>
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
