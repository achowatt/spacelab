import Link from "next/Link";
import styled from "styled-components";

const NavStyle = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  box-shadow: 2px 2px 15px rgba(194, 194, 194, 0.589);
  background: white;

  a:not(last-child) {
    margin-right: 2rem;
  }

  a {
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

export default function Nav() {
  return (
    <NavStyle>
      <Link href="/page1">page 1</Link>
      <Link href="/page2">page 2</Link>
      <Link href="/page3">page 3</Link>
    </NavStyle>
  );
}
