import styled from "styled-components";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 40% auto;
`;
const GridItem = styled.div`
  padding-right: ${(props) => (props.left ? "5%" : "0%")};
`;

const P = styled.p`
  font-weight: thin;
  line-height: 1.6;
`;

const About = () => {
  return (
    <div style={{ margin: "5%" }}>
      <Navbar />
      <img
        src="/content/about/jenny.jpg"
        alt="Jenny cover image"
        style={{ width: "100%", height: "350px", objectFit: "cover" }}
      />
      <h2>Jenny Lu 張呂佳蓉</h2>
      <br />
      <Grid>
        <GridItem left="true">
          <h3>I have nothing, only a pure heart to love Jesus.</h3>
          <h3>我一無所有, 只有一顆清心愛耶穌.</h3>
        </GridItem>
        <div>
          <P>
            Praise by Praise was registered on Thanksgiving Day, November 26,
            2015. It is so meaningful to establish this site for Jesus with
            thankful heart on Thanksgiving Day. I give my thankful heart to
            Jesus that from now on, on every Thanksgiving Day, I have this very
            special thing to thank Him- Praise by Praise. This site is dedicated
            to Jesus and to the body of Christ.
          </P>
          <P>
            永續讚美. 成立在感恩節, 十一月, 二十六日, 2015 年.
            這是非常的有意義在感恩節當天, 帶著感恩的心為了耶穌成立了這個網站.
            我獻上感恩的心給耶穌, 因為從今起每一個感恩節, 我能為這特別的事,
            永續讚美, 感謝主
          </P>

          <div style={{ display: "flex" }}>
            <P>
              I have nothing, only a pure heart to love Jesus. A pure heart is
              enough to express Praise by Praise with the guidance from Holy
              Spirit. I have no music degree, only learned to play piano a few
              years when I was little. Day by day, I am filled with music, and
              God's love. I sing praise to Him everyday.
            </P>
            <P>
              我一無所有, 只有一顆清心愛主. 在聖靈的帶領下,
              只要有一顆清心就足夠表達永續讚美. 我沒有音樂學歷,
              只是小時候學過幾年鋼琴. 天天, 我充盈在奇妙的音律, 和神的愛中.
              我每天唱讚美神的歌.
            </P>
          </div>
        </div>
      </Grid>
      <br />
      <br />
      <Grid>
        <GridItem left="true">
          <h3>
            This is the corner of my private room where I compose songs and sing
            praise and worship God.
          </h3>
          <h3>這是我私人空間的一角, 我在此作曲, 唱歌讚美, 敬拜神.</h3>
        </GridItem>
        <img
          width="100%"
          src="/content/about/recording.jpg"
          alt="Recording equipment"
        />
      </Grid>
      <Footer />
    </div>
  );
};

export default About;
