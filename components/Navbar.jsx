import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3%;
`;

const Text = styled.div`
  font-size: ${(props) => (props.title ? "30px" : "15px")};
  font-weight: ${(props) => (props.title ? "bold" : "regular")};
  color: ${(props) => (props.title ? "black" : "gray")};
  text-decoration: none;
  font-family: "Quattrocento Sans", sans-serif;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <>
      <Nav>
        <Link href="/">
          <Text title="true">Praise By Praise</Text>
        </Link>
      </Nav>
      <Nav>
        <Link href="/songs">
          <Text>SONGS</Text>
        </Link>
        <div style={{ marginRight: "10%" }}></div>
        <Link href="/word">
          <Text>WORD</Text>
        </Link>
        <div style={{ marginRight: "10%" }}></div>
        <Link href="/video">
          <Text>VIDEO</Text>
        </Link>
        <div style={{ marginRight: "10%" }}></div>
        <Link href="/about">
          <Text>ABOUT</Text>
        </Link>
      </Nav>
    </>
  );
};

export default Navbar;
