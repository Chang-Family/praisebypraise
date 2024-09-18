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
    <div style={{ marginTop: "5%" }}>
      <Nav>
        <Link href="/" legacyBehavior>
          <Text title="true">Praise By Praise</Text>
        </Link>
      </Nav>
      <Nav>
        <Link href="/songs" legacyBehavior>
          <Text>SONGS</Text>
        </Link>
        <div style={{ marginRight: "10%" }}></div>
        <Link href="/word" legacyBehavior>
          <Text>WORD</Text>
        </Link>
        <div style={{ marginRight: "10%" }}></div>
        <Link href="/video" legacyBehavior>
          <Text>VIDEO</Text>
        </Link>
        <div style={{ marginRight: "10%" }}></div>
        <Link href="/about" legacyBehavior>
          <Text>ABOUT</Text>
        </Link>
      </Nav>
    </div>
  );
};

export default Navbar;
