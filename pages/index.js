import Navbar from "../components/Navbar";
import Playlist from "components/Playlist";
import flower from "./flower.jpg";
import cover from "./praisebypraisecover.png";
import styled from "styled-components";
import SongList from "components/SongList";

const Pgraph = styled.p`
  display: block;
`;

const Pline = styled.span`
  display: block;
`;

const Home = () => {
  return (
    <div style={{ margin: "5%" }}>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={cover}
          style={{
            height: "55vh",
            width: "90vw",
            objectFit: "cover",
          }}
        />
      </div>
      <div>
        <Pgraph>
          ​<Pline>He put a new song in my mouth,</Pline>
          <Pline>a hymn of praise to our God. </Pline>
          <Pline>Many will see and fear </Pline>
          <Pline>and put their trust in the Lord. </Pline>
          <Pline>Psalm 40:3</Pline>
        </Pgraph>
        <Pgraph>
          <Pline>祂使我口唱新歌,</Pline> 就是讚美我們 神的話.
          許多人必看見而懼怕, 並要倚靠耶和華. 詩篇40:3
        </Pgraph>

        <SongList />
      </div>
    </div>
  );
};

export default Home;
