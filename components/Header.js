import Link from "next/Link";
import Nav from "./Nav";
import styled from "styled-components";

const HeaderStyle = styled.header`
  position: sticky;
  top: 0;
`;

const Logo = styled.div`
  background: black;
  display: grid;
  place-items: center;
  padding: 2rem 0;
  color: white;
  font-size: 4rem;
  cursor: pointer;
`;

export default function Header() {
  return (
    <HeaderStyle>
      <Link href="/">
        <Logo>SpaceLab</Logo>
      </Link>
      <Nav />
    </HeaderStyle>
  );
}
