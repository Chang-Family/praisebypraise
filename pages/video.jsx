import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
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
    <div style={{ margin: "5%" }}>
      <Navbar />
      <div className="video-grid">
        <div className="zero">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/O7t7PJUDKTE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="one">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/1l6rTIxmo3E"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="two">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Enu9UZg1u4Q"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="three">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/bK-kiBdAoNo"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="four">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/sSXs0vgeVp4"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Video;
