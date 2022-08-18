import MenuLink from "./Menu.Link";
import MenuLinks from "../../data/menu.json";

const Menu = () => {
  return (
    <nav>
      <img src="/img/logo.svg" alt="" />
      <ul>
        {MenuLinks.map((link) => (
          <li key={link.title}>
            <MenuLink link={link} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
