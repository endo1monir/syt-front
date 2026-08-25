import "./NavBar.css"
import PhoneButton from "../PhoneButton/PhoneButton";
import SideMenu from "../SideMenu/SideMenu";

const NavBar = () => {
  return (
    <nav className="navbar">
      <PhoneButton />

      <div className="navbar__logo">
        <img src="/logo.svg" alt="SYT Plus" />
      </div>

      <SideMenu />
    </nav>
  );
};

export default NavBar;