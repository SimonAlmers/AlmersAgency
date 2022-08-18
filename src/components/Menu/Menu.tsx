import MenuLink from "./Menu.Link";
import MenuLinks from "data/menu.json";
import { styled } from "@stitches/react";
import Link from "next/link";
import Zindex from "helpers/Zindex";

const StyledMenu = styled("nav", {
  position: "relative",
  padding: "16px 48px",
  display: "flex",
  justifyContent: "space-between",
  zIndex: Zindex.MainMenu,
  "@media screen and (max-width: 992px)": {
    ul: {
      flexDirection: "column",
    },
  },
  ul: {
    display: "flex",
    columnGap: 32,
    listStyle: "none",
  },
});

const Menu = () => {
  return (
    <StyledMenu>
      <Link href="/">
        <a>
          <img src="/img/logo.svg" alt="" />
        </a>
      </Link>
      <ul>
        {MenuLinks.map((link) => (
          <li key={link.title}>
            <MenuLink link={link} />
          </li>
        ))}
      </ul>
    </StyledMenu>
  );
};

export default Menu;
