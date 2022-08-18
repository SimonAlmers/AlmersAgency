import Link from "next/link";

const MenuLink = ({ link }: { link: { title: string; link: string } }) => {
  return (
    <Link href={link.link}>
      <a>{link.title}</a>
    </Link>
  );
};

export default MenuLink;
