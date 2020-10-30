import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const Container = styled.div`
  margin: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const VidWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
`;
const Vid = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Video = () => {
  return (
    <>
      <Navbar />
      <Container>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/O7t7PJUDKTE"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1l6rTIxmo3E"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Enu9UZg1u4Q"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bK-kiBdAoNo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/sSXs0vgeVp4"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/sSXs0vgeVp4"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Container>
    </>
  );
};

export default Video;
