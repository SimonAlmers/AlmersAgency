import { styled } from "@stitches/react";
import Link from "next/link";
import { useRouter } from "next/router";

const StyledMenuLink = styled("span", {
  fontWeight: "bold",
  "&:hover, &:focus": {
    textDecoration: "underline",
  },
  "&.active": {
    color: "red",
  },
});

const MenuLink = ({ link }: { link: { title: string; link: string } }) => {
  const { asPath } = useRouter();
  return (
    <Link href={link.link}>
      <a>
        <StyledMenuLink className={link.link === asPath ? "active" : ""}>
          {link.title}
        </StyledMenuLink>
      </a>
    </Link>
  );
};

export default MenuLink;
