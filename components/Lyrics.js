import React from "react";

const Lyrics = ({ lyrics }) => {
  return (
    <div
      style={{ whiteSpace: "pre-line" }}
      dangerouslySetInnerHTML={{ __html: lyrics }}
    ></div>
  );
};

export default Lyrics;
