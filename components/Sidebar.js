import React, { useState } from "react";

const Sidebar = ({ children }) => {
  const MIN_WIDTH = 10;
  const MAX_WIDTH = 100;

  const [width, setWidth] = useState(MIN_WIDTH);

  const adjustWidth = (width) => {
    setWidth(width);
  };

  return (
    <div
      onMouseEnter={(e) => adjustWidth(MAX_WIDTH)}
      onMouseLeave={(e) => adjustWidth(MIN_WIDTH)}
      className="width-animate"
      style={{
        height: "100vh",
        width: "100%",
        maxWidth: `${width}px`,
        position: "sticky",
        top: "0",
        backgroundColor: "#E5C69F",
        overflow: "hidden",
      }}
    >
      {width === MAX_WIDTH ? children : null}
    </div>
  );
};

export default Sidebar;
