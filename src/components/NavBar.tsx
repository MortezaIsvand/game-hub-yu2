import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <div className="flex items-center gap-2">
      <Link to={"/"}>
        <img src={logo} alt="logo" width={55} />
      </Link>
      <SearchInput />
    </div>
  );
};
export default NavBar;
