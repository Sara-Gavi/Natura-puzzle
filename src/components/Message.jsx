// Importar PropTypes desde la biblioteca prop-types
import PropTypes from "prop-types";

function Message({ handleStartGame }) {
  //Comprobamos si el mensaje debe estar visible según la prop isVisible
  return (
    <div className="message">
      <div className="message__text">
        <h2 className="message__h2">
          ¡Descubre el mundo natural mientras haces un puzzle!
        </h2>
        <p className="message__p">
          ¡Coloca cada pieza en su sitio haciendo clics y descubrirás un mensaje
          secreto sobre la naturaleza y por qué es importante cuidarla!
        </p>
        <div className="message__button">
          <a className="button__text" onClick={handleStartGame}>
            ¡Comenzar!
          </a>
        </div>
      </div>
    </div>
  );
}

//Validación de PropTypes para las props
Message.propTypes = {
  handleStartGame: PropTypes.func.isRequired,
};

export default Message;
