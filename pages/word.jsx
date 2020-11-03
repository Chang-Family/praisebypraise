import styled from "styled-components";
import BlogList from "components/BlogList";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { getMdxContent } from "utils";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 50px;
  line-height: 0;
  margin: 0;
  margin-top: 20;
`;

const YearItem = styled.h1`
  text-align: center;
  padding: 60px;
  background-color: #bd645a;
  color: #e5c69f;
  font-size: 2rem;
  border-radius: 3px;
  cursor: pointer;
  line-height: 0;
  margin: 0;
`;

const Word = () => {
  const scrollToYear = (year) => {
    const node = document.getElementsByClassName(year)?.[0];
    if (node) {
      node.scrollIntoView();
    }
  };

  return (
    <div style={{ margin: "5%" }}>
      <Navbar />
      <Grid>
        <YearItem onClick={() => scrollToYear(2015)}>2015</YearItem>
        <YearItem onClick={() => scrollToYear(2016)}>2016</YearItem>
        <YearItem onClick={() => scrollToYear(2017)}>2017</YearItem>
        <YearItem onClick={() => scrollToYear(2018)}>2018</YearItem>
      </Grid>
      <br />
      <br />
      <br />
      <BlogList />
      <Footer />
    </div>
  );
};

export default Word;
