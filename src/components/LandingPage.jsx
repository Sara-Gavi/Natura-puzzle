import naturaLogo from "../images/NATURA.png";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <header className="hero">
        <section className="hero__content">
          <img className="content__logo" src={naturaLogo} alt="Natura Puzzle" />
          <p className="content__slogan">
            Construye un Mundo Sostenible Pieza a Pieza
          </p>
          <div className="content__button">
            <Link to="/puzzle" className="button__a">
              ¡A Jugar!
            </Link>
          </div>
        </section>
      </header>
    </div>
  );
}

export default LandingPage;
