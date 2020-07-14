import React, { useEffect, useState } from "react";
import "./App.css";

import ReactMarkdown from "react-markdown";

const App = () => {
  const [markdownText, setMarkdownText] = useState("");

  const importMarkdownFile = async () => {
    // you can dynamically insert the string
    const module = await import("./sample-article.md");
    const response = await fetch(module.default);
    const text = await response.text();
    setMarkdownText(text);
  };

  useEffect(() => {
    importMarkdownFile();
  }, []);

  return (
    <div className="App">
      <ReactMarkdown source={markdownText} />
    </div>
  );
};

export default App;
