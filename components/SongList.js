import React from "react";
import styled from "styled-components";
import Lyrics from "components/Lyrics";
import { getMdxContent } from "utils";
import { useGlobalState } from "hooks/useGlobalState";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 15% 15% 50%;
  align-items: center;
`;

const SongList = () => {
  const mdxContent = getMdxContent();
  const {
    isPlaying,
    setIsPlaying,
    setCurrentlyPlayingSong,
    currentlyPlayingSong,
    setNextSongs,
  } = useGlobalState();

  // only display posts with audio in their meta tag
  const songs = mdxContent.filter((c) => c?.meta?.audio);

  const onAudioEnded = () => {
    console.log("ended!!!");
  };

  const playSong = (event, song, nextSongs) => {
    console.log("play song", song);
    setIsPlaying(true);
    setCurrentlyPlayingSong(song);
    // set everything after it in the queue
    setNextSongs(nextSongs);
  };

  const pauseSong = (event) => {
    console.log("pause song");
    setIsPlaying(false);
  };

  const PlayPauseButton = ({ song, nextSongs }) => {
    // if song in list is same as globally playing song, it can be in two states
    if (song?.meta?.audio === currentlyPlayingSong?.meta?.audio) {
      // either it's playing, in which case we need a button to pause it
      if (isPlaying) {
        return (
          <button onClick={pauseSong} style={{ width: "80px" }}>
            Pause
          </button>
        );
      }
      // or it's paused, in which case we need to play it
      return (
        <button
          onClick={(e) => playSong(e, song, nextSongs)}
          style={{ width: "80px" }}
        >
          Play
        </button>
      );
    }
    // play song if not current song
    return (
      <button
        onClick={(e) => playSong(e, song, nextSongs)}
        style={{ width: "80px" }}
      >
        Play
      </button>
    );
  };

  return (
    <div>
      {songs.map((p, i) => {
        return (
          <>
            <hr />
            <GridContainer key={p?.slug}>
              <h3>{p?.meta?.title}</h3>
              <details>
                <summary>See Lyrics</summary>
                <Lyrics lyrics={p.meta.lyrics_cn} />
              </details>
              <a href={p?.slug}>See page</a>
              <PlayPauseButton song={p} nextSongs={songs.slice(i + 1)} />
              {/* <audio controls src={p?.meta?.audio} onEnded={onAudioEnded} /> */}
            </GridContainer>
          </>
        );
      })}
    </div>
  );
};

export default SongList;
