import NaturaLogo from "../images/NATURA.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header__container">
      <div className="header__logo">
        <Link to="/">
          <img className="header__logo" src={NaturaLogo} alt="NaturaLogo" />
        </Link>
      </div>
      <div className="header__slogan">
        <p>Construye un mundo sostenible pieza a pieza</p>
      </div>
    </header>
  );
}

export default Header;
