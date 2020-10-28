// Node dependencies
import { getMdxContent } from "../utils";
import Navbar from "../components/Navbar";
import Lyrics from "components/Lyrics";
import Playlist from "components/Playlist";
import flower from "./flower.jpg";
import cover from "./praisebypraisecover.png";
import styled from "styled-components";

const Pgraph = styled.p`
  display: block;
`;
const Pline = styled.span`
  display: block;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 15% 15% 50%;
  align-items: center;
`;

const Home = () => {
  const mdxContent = getMdxContent();
  return (
    <>
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
      <div style={{ margin: "5%" }}>
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

        {mdxContent.map((p) => {
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
                <audio controls src={p?.meta?.audio} />
              </GridContainer>
            </>
          );
        })}

        <h2>Playlist</h2>
      </div>
      <Playlist />
    </>
  );
};

export default Home;
