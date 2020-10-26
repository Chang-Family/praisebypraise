import React from "react";
import { getMdxContent } from "utils";

const Playlist = () => {
  // * get all the links to audio files
  const mdxContent = getMdxContent();
  const linksToAudio = mdxContent
    .filter((m) => m?.meta?.audio)
    .map((m) => m?.meta?.audio);
  console.log("playlist", linksToAudio);

  // * here, feel free to make any component to play those audio files
  return <div>{linksToAudio}</div>;
};

export default Playlist;
