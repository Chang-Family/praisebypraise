import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { getMdxContent } from "utils";
import flower from "./flower.jpg";
import cover from "./praisebypraisecover.png";
import styled from "styled-components";
import SongList from "components/SongList";
import BlogList from "components/BlogList";
import redflower from "./Red-Flowers.jpg";
import blogcover from "./blog_cover.jpg";
import blossoms from "./Blossoms2.jpg";

const Pgraph = styled.p`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Space = styled.div`
  margin-bottom: 10%;
`;

const P = styled.span`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 3%;
  padding-bottom: 3%;
`;

const Container2 = styled.div`
  width: 100%;
  position: relative;
  color: #fff;
  background-color: #bdc692;
`;

const Container = styled.div`
  width: 40%;
  position: relative;
  color: white;
  background-color: #bdc692;
  border: 0px solid #bdc692;
  border-radius: 30px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  text-align: center;
  object-fit: cover;
  opacity: 80%;
  border: 0px solid #bdc692;
  border-radius: 30px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  font-size: 1.4vw;
  font-weight: bold;
  font-family: Quattrocento;
  line-height: 1.5em;
  opacity: 90%;
`;

const Overlay2 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 9vw;
  font-family: Quattrocento;
  opacity: 80%;
`;

const Overlay3 = styled.div`
  position: absolute;
  top: 35%;
  left: 75%;
  transform: translate(-75%, -35%);
  font-size: 2vw;
  font-family: Quattrocento;
  opacity: 80%;
`;

const Overlay4 = styled.div`
  position: absolute;
  top: 65%;
  left: 15%;
  transform: translate(-15%, -65%);
  font-size: 2vw;
  font-family: Quattrocento;
  opacity: 80%;
  text-align: right;
`;

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container2>
        <img
          src={flower}
          style={{
            height: "60vh",
            width: "100%",
            objectFit: "cover",
            opacity: "80%",
          }}
        />
        <Overlay2>
          Praise <br />
          &nbsp; &nbsp; &nbsp; by Praise
        </Overlay2>
        <Overlay3>
          Praise by Praise, day by day. <br /> Everlasting praise to you.
        </Overlay3>
        <Overlay4>
          讚美接讚美, 一天接一天, <br /> 永續讚美獻上給神.
        </Overlay4>
      </Container2>
      <Space />
      <div style={{ margin: "5%" }}>
        <div style={{ display: "flex" }}>
          <Container>
            <Img src={blossoms} alt="blog" />
            <Overlay>
              Sing to the Lord a new song; sing to the Lord, all the earth.
              <br />
              Psalm 96:1 <br />
              <br />
              你們要向耶和華唱新歌.
              <br />
              全地都要向耶和華歌唱. <br />
              詩篇 96:1
            </Overlay>
          </Container>
          <div style={{ marginLeft: "3%", width: "80%" }}>
            <h1>Featured Songs</h1>
            <SongList limit="5" />
          </div>
        </div>
        <Space />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <iframe
            width="90%"
            height="515px"
            src="https://www.youtube.com/embed/O7t7PJUDKTE"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              marginRight: "20px",
              borderRadius: "30px",
            }}
          ></iframe>
          <Container>
            <Img src={redflower} alt="blog" />
            <Overlay>
              Speak the grace of Lord Jesus Christ <br />
              We are so thankful
              <br />
              <br />
              細訴主耶穌基督的恩典 ​ 我們滿心感謝
            </Overlay>
          </Container>
        </div>
        <Space />
        <div style={{ display: "flex" }}>
          <Container>
            <Img src={blossoms} alt="blog" />
            <Overlay
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                textAlign: "center",
                transform: "translate(-50%, -50%)",
                fontSize: "1.5vw",
                fontWeight: "bold",
                fontFamily: "Quattrocento Sans",
              }}
            >
              Sing to the Lord a new song; sing to the Lord, all the earth.
              Psalm 96:1 <br />
              你們要向耶和華唱新歌.全地都要向耶和華歌唱. 詩篇 96:1
            </Overlay>
          </Container>
          <div style={{ marginLeft: "3%", width: "80%" }}>
            <h1>Featured Blog</h1>
            <BlogList />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
