import React, { useState, useEffect } from "react";
import useGlobalState from "hooks/useGlobalState";

const Sidebar = ({ children }) => {
  const MIN_WIDTH = 10;
  const MAX_WIDTH = 100;

  const { isPlaying } = useGlobalState();
  const [width, setWidth] = useState(MIN_WIDTH);

  useEffect(() => {
    if (isPlaying) {
      setWidth(MAX_WIDTH);
    }
  }, [isPlaying]);

  const adjustWidth = (width) => {
    setWidth(width);
  };

  return (
    <div
      onMouseEnter={(e) => adjustWidth(MAX_WIDTH)}
      onMouseLeave={(e) => adjustWidth(MIN_WIDTH)}
      className="width-animate"
      style={{
        // the width
        width: "100%",
        maxWidth: `${width}px`,

        // make it sticky
        height: "100vh",
        position: "sticky",
        top: "0",

        // color
        backgroundColor: "#E5C69F",
        overflow: "hidden",
      }}
    >
      <div style={{ visibility: width === MAX_WIDTH ? "visible" : "hidden" }}>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
