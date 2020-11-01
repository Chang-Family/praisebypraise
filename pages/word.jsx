import styled from "styled-components";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { getMdxContent } from "utils";

const Word = () => {
  const blogPosts = getMdxContent().filter((p) => p?.meta?.type === "blog");
  return (
    <div style={{ margin: "5%" }}>
      <Navbar />
      <h1>2015</h1>
      <h1>2016</h1>
      <h1>2017</h1>
      <h1>2018</h1>
      {blogPosts.map((p) => (
        <h2>{p?.meta?.title}</h2>
      ))}
      <Footer />
    </div>
  );
};

export default Word;
