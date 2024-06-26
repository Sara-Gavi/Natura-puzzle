import creativeCode from "../images/CREATIVE.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img className="footer__logo" src={creativeCode} alt="Creative Code" />
        <p className="footer__p">
          &copy; {new Date().getFullYear()} -{" "}
          <Link
            to="https://www.linkedin.com/in/saragavilan/"
            target="_blank"
            rel="noopener noreferrer" // proteger la privacidad y seguridad
            className="footer__a"
          >
            Developer Sara Gavilán
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
