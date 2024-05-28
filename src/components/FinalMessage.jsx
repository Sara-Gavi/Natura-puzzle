import { Link } from "react-router-dom";
import NaturaLogo from "../images/NATURA.png";

function FinalMessage() {
  return (
    <div className="message">
      <div className="message__text">
        <h2 className="message__h2">
          ¿Sabías por qué cambian los colores de los árboles?
        </h2>
        <p className="message__p">
          Durante el verano, las hojas están llenas de un pigmento verde llamado
          clorofila que les da su color verde. Pero cuando llega el otoño y
          empieza a hacer más frío, las hojas comienzan a cambiar de color. Esto
          sucede porque la clorofila, que necesita mucha luz y calor, desaparece
          y revela otros colores que estaban escondidos todo el tiempo, como
          amarillos, naranjas, rojos. Por eso es importante proteger los bosques
          y cuidarlos, para que siempre podamos disfrutar de sus colores.
        </p>
        <Link to="/">
          <img className="logo__message" src={NaturaLogo} alt="NaturaLogo" />
        </Link>
      </div>
    </div>
  );
}

export default FinalMessage;
