import Footer from "components/Footer";
import Menu from "components/Menu";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
