import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet />
    </>
  );
};
export default Layout;
