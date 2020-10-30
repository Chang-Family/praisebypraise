import Navbar from "../components/Navbar";
import Playlist from "components/Playlist";
import flower from "./flower.jpg";
import cover from "./praisebypraisecover.png";
import styled from "styled-components";
import SongList from "components/SongList";

const Pgraph = styled.p`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const P = styled.span`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 3%;
  padding-bottom: 3%;
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
        <P>
          <div>
            ​<Pgraph>He put a new song in my mouth,</Pgraph>
            <Pgraph>a hymn of praise to our God. </Pgraph>
            <Pgraph>Many will see and fear </Pgraph>
            <Pgraph>and put their trust in the Lord. </Pgraph>
            <Pgraph>Psalm 40:3</Pgraph>
          </div>
          <div>
            <Pgraph>祂使我口唱新歌,</Pgraph>
            <Pgraph>就是讚美我們神的話.</Pgraph>
            <Pgraph>許多人必看見而懼怕,</Pgraph>
            <Pgraph>並要倚靠耶和華.</Pgraph>
            <Pgraph>詩篇40:3</Pgraph>
          </div>
        </P>

        <SongList />
      </div>
    </div>
  );
};

export default Home;
