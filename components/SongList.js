import React from "react";
import styled from "styled-components";
import { getMdxContent } from "utils";
import { useGlobalState } from "hooks/useGlobalState";
import PlayIcon from "assets/icons/play.svg";
import PauseIcon from "assets/icons/pause.svg";
import Link from "next/link";

const IconButton = styled.img`
  cursor: pointer;
  height: 20px;
`;

const SongTitle = styled.h3`
  margin-left: 20px;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

const Group = styled.div``;

const SongList = ({ featuredOnly = false, limit = null }) => {
  const mdxContent = getMdxContent();
  const {
    isPlaying,
    playlist: globalPlaylist,
    playlistPosition: globalPlaylistPosition,
    setIsPlaying,
    setPlaylist,
    setPlaylistPosition,
  } = useGlobalState();

  // only display posts with audio in their meta tag
  let songs = mdxContent.filter((c) => c?.meta?.audio);

  // if featured is set
  if (featuredOnly) {
    songs = songs.filter((c) => c?.meta?.featured);
  }

  // if limit is set
  if (limit) {
    songs = songs.slice(0, limit);
  }

  songs.sort((a, b) => {
    const aDate = new Date(a?.meta?.date);
    const bDate = new Date(b?.meta?.date);
    return bDate - aDate;
  });

  const playSong = (event, playlist, playlistPosition) => {
    setPlaylist(playlist);
    setPlaylistPosition(playlistPosition);
    setIsPlaying(true);
  };

  const pauseSong = (event) => {
    console.log("pause song");
    setIsPlaying(false);
  };

  const PlayPauseButton = ({ playlist, playlistPosition }) => {
    const currSong = playlist[playlistPosition];
    // if song in list is same as globally playing song, it can be in two states
    if (
      currSong?.meta?.audio ===
      globalPlaylist?.[globalPlaylistPosition]?.meta?.audio
    ) {
      // either it's playing, in which case we need a button to pause it
      if (isPlaying) {
        return <IconButton src={PauseIcon} onClick={pauseSong} />;
      }
      // or it's paused, in which case we need to play it
      return (
        <IconButton
          src={PlayIcon}
          onClick={(e) => playSong(e, playlist, playlistPosition)}
        />
      );
    }
    // play song if not current song
    return (
      <IconButton
        src={PlayIcon}
        onClick={(e) => playSong(e, playlist, playlistPosition)}
      />
    );
  };

  return (
    <div>
      {songs.map((p, i) => {
        const date = new Date(p?.meta?.date);
        const year = date ? date.getFullYear() + "" : "";
        return (
          <div
            class={year}
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              borderTop: "1px solid #E5C69F",
            }}
          >
            <Group style={{ display: "flex", alignItems: "center" }}>
              <PlayPauseButton playlist={songs} playlistPosition={i} />
              <Link href={p?.slug}>
                <SongTitle>
                  {p?.meta?.title}{" "}
                  {p?.meta?.title_cn ? `- ${p?.meta?.title_cn}` : ""}
                </SongTitle>
              </Link>
            </Group>
            <Group style={{ display: "flex" }}>
              {/* <details className="dropdown-animate">
                  <summary className="dropdown-animate">See Lyrics</summary>
                  <Lyrics lyrics={p.meta.lyrics_cn} />
                </details> */}
              <p>{p?.meta?.date}</p>
            </Group>
          </div>
        );
      })}
    </div>
  );
};

export default SongList;
