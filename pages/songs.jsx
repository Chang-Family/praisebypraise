import styled from "styled-components";
import Navbar from "components/Navbar";
import SongList from "components/SongList";

const Songs = () => {
  const scrollToYear = (year) => {
    const node = document.getElementsByClassName(year)?.[0];
    if (node) {
      node.scrollIntoView();
    }
  };

  return (
    <div style={{ margin: "5%" }}>
      <Navbar />
      <h1 onClick={() => scrollToYear(2015)}>2015</h1>
      <h1 onClick={() => scrollToYear(2016)}>2016</h1>
      <h1 onClick={() => scrollToYear(2017)}>2017</h1>
      <h1 onClick={() => scrollToYear(2018)}>2018</h1>
      <SongList />
    </div>
  );
};

export default Songs;
