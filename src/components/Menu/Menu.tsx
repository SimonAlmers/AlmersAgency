import MenuLink from "./Menu.Link";
import MenuLinks from "data/menu.json";
import { styled } from "@stitches/react";

const StyledMenu = styled("nav", {});

const Menu = () => {
  return (
    <StyledMenu>
      <img src="/img/logo.svg" alt="" />
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
