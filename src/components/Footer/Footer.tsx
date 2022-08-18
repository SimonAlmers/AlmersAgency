import { styled } from "@stitches/react";
import Link from "next/link";

const StyledFooter = styled("footer", {
  position: "relative",
  backgroundColor: "#150061",
  minHeight: 350,
  padding: 48,
});

const Footer = () => {
  return (
    <StyledFooter>
      <Link href="/">
        <a>
          <img src="/img/logo.svg" alt="" />
        </a>
      </Link>
      <div
        style={{
          display: "flex-block",
          justifyContent: "center",
          columnGap: 16,
          marginTop: 200,
          width: "100%",
          opacity: 0.5,
        }}
      >
        <span>Data Policy</span>
        <span>|</span>
        <span>© Almers Entertainment Group AB {new Date().getFullYear()}</span>
        <span>|</span>
        <span>All Rights Reserved</span>
      </div>
    </StyledFooter>
  );
};

export default Footer;
