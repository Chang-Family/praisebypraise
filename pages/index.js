import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";

const Home = ({ posts }) => {
  return (
    <div>
      <h1>Home</h1>
      <h2>List of posts:</h2>
      {JSON.stringify(posts)}
    </div>
  );
};

export const getStaticProps = async () => {
  // list all the files in the posts directory
  const files = fs.readdirSync(`${process.cwd()}/content/posts`);
  // for each file
  const posts = files.map((filename) => {
    // read the file and get the frontmatter
    const markdownWithMetadata = fs
      .readFileSync(`content/posts/${filename}`)
      .toString();
    const { data } = matter(markdownWithMetadata);
    // Convert post date to a string with this format: Month day, Year
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = data.date.toLocaleDateString("en-US", options);
    // Override the date in the frontmatter data
    const frontmatter = {
      ...data,
      date: formattedDate,
    };
    // each post consists of a slug and a frontmatter
    return {
      slug: filename.replace(".md", ""),
      frontmatter,
    };
  });
  // return posts as props for the Home function (above), in which it is injected
  return {
    props: {
      posts,
    },
  };
};

export default Home;
