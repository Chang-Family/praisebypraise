import styled from "styled-components";
import BlogList from "components/BlogList";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { getMdxContent } from "utils";

const Word = () => {
  return (
    <div style={{ margin: "5%" }}>
      <Navbar />
      <h1>2015</h1>
      <h1>2016</h1>
      <h1>2017</h1>
      <h1>2018</h1>
      <BlogList />
      <Footer />
    </div>
  );
};

export default Word;
