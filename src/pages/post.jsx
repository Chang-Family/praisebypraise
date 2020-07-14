import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const Post = () => {
  const { slug } = useParams();
  const [markdownText, setMarkdownText] = useState("");

  const importMarkdownFile = async () => {
    // you can dynamically insert the string
    const module = await import(`../posts/${slug}.md`);
    const response = await fetch(module.default);
    const text = await response.text();
    setMarkdownText(text);
  };

  useEffect(() => {
    importMarkdownFile();
  }, []);

  // escapeHTML === false lets us use any HTML inside our markdown. sugoi!
  return <ReactMarkdown source={markdownText} escapeHtml={false} />;
};

export default Post;
