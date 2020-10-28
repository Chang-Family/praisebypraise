import React from "react";

const Lyrics = ({ lyrics }) => {
  return (
    <p
      style={{ whiteSpace: "pre-line" }}
      dangerouslySetInnerHTML={{ __html: lyrics }}
    ></p>
  );
};

export default Lyrics;
