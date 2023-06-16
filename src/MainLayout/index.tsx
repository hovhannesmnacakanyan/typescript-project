import { Link } from "react-router-dom";

export const MainLayout = (props: { children: React.ReactNode }) => {
  return (
    <>
      {/* this is a component */}
      <header>
        <Link to={"/"}>Logo</Link>
        <Link to={"/about"}>About</Link>
        <br />
        <Link to={"/contact"}>Contact</Link>
        <br />
        <Link to={"/cart"}>Cart</Link>
        <br />
        <Link to={"/products"}>Products</Link>
      </header>
      <main>{props.children}</main>
      {/* this is a component */}
      <footer>some footer</footer>
    </>
  );
};
