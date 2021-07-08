import Image from "next/image";
import styled from "styled-components";

const FooterStyle = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function footer() {
  return (
    <FooterStyle>
      SpaceLab Footer
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </FooterStyle>
  );
}
