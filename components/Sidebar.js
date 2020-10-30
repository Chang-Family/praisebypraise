import React from "react";

const Sidebar = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "red",
        height: "100vh",
        width: "100%",
        maxWidth: "100px",
        position: "sticky",
        top: "0",
      }}
    >
      {children}
    </div>
  );
};

export default Sidebar;
