import styled from "styled-components";
import Navbar from "../components/Navbar";

import SongList from "components/SongList";
import NowPlaying from "components/NowPlaying";

const Songs = () => {
  return (
    <div style={{ margin: "5%" }}>
      <Navbar />
      <h1>2015</h1>
      <h1>2016</h1>
      <h1>2017</h1>
      <h1>2018</h1>
      <NowPlaying />
      <SongList />
    </div>
  );
};

export default Songs;
