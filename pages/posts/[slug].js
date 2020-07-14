import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

const Post = ({ content, frontmatter }) => {
  return (
    <article>
      {/* do something with the frontmatter too, like show the title, date etc */}
      {/* render the content as markdown */}
      <ReactMarkdown source={content} escapeHtml={false} />
    </article>
  );
};

export default Post;

export const getStaticProps = async ({ params: { slug } }) => {
  // read the file in the posts directory with the given slug
  const markdownWithMetadata = fs
    .readFileSync(path.join("content/posts", slug + ".md"))
    .toString();
  // parse the frontmatter and get the content
  const { data, content } = matter(markdownWithMetadata);
  // convert post date to format: Month day, Year
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = data?.date?.toLocaleDateString("en-US", options) || "";
  // override the date in the frontmatter
  const frontmatter = {
    ...data,
    date: formattedDate,
  };
  // return both the content and the frontmatter to the Post component,
  // in which it is injected
  return {
    props: {
      content: content,
      frontmatter,
    },
  };
};

export const getStaticPaths = async () => {
  // get all the files that might ever have to be rendered by this route
  const files = fs.readdirSync("content/posts");
  const markdownFiles = files.filter((f) => path.extname(f) === ".md");
  // get their paths
  const paths = markdownFiles.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  // return paths
  return {
    paths,
    fallback: false,
  };
};
