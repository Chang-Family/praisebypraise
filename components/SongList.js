import React from "react";
import styled from "styled-components";
import Lyrics from "components/Lyrics";
import { getMdxContent } from "utils";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 15% 15% 50%;
  align-items: center;
`;

const SongList = () => {
  const mdxContent = getMdxContent();

  return (
    <div>
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
    </div>
  );
};

export default SongList;
