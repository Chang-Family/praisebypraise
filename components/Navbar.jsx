import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Link href="/">Home</Link>
      <div style={{ marginRight: "20px" }}></div>
      <Link href="/about">About</Link>
    </div>
  );
};

export default Navbar;
