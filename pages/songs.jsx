import styled from "styled-components";
import Navbar from "../components/Navbar";

import SongList from "components/SongList";
import CurrentlyPlaying from "components/CurrentlyPlaying";

const Songs = () => {
  return (
    <div style={{ margin: "5%" }}>
      <Navbar />
      <h1>2015</h1>
      <h1>2016</h1>
      <h1>2017</h1>
      <h1>2018</h1>
      <CurrentlyPlaying />
      <SongList />
    </div>
  );
};

export default Songs;
