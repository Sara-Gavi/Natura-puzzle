import creativeCode from "../images/CREATIVE.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img className="footer__logo" src={creativeCode} alt="Creative Code" />
        <p>
          &copy; {new Date().getFullYear()} -{" "}
          <a
            href="https://www.linkedin.com/in/saragavilan/"
            target="_blank"
            rel="noopener noreferrer" // proteger la privacidad y seguridad
          >
            Developer Sara Gavilán
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
