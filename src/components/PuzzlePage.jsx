//La función useState permite agregar estado a los componentes de React
import { useState } from "react";
import { Link } from "react-router-dom";
import NaturaLogo from "../images/NATURA.png";
//Imagenes para las piezas del Puzzle
import imagen0 from "../images/00.jpg";
import imagen1 from "../images/01.jpg";
import imagen2 from "../images/02.jpg";
import imagen3 from "../images/03.jpg";
import imagen4 from "../images/04.jpg";
import imagen5 from "../images/05.jpg";
import imagen6 from "../images/06.jpg";
import imagen7 from "../images/07.jpg";
import imagen8 from "../images/08.jpg";

//const order = [4, 7, 1, 0, 2, 6, 8, 3, 5]; Piezas desordenadas manualmente
//constante para tener el orden inicial de las piezas del puzzle
const order = [0, 1, 2, 3, 4, 5, 6, 7, 8].sort(() => Math.random() * 2 - 1);
console.log(order);
function PuzzlePage() {
  //Definir estados necesarios para el puzzle(tablero, imágenes de las piezas, piezas seleccionadas, mensaje de inicio)
  //Estado para el tablero
  //Utilizamos null para representar una casilla vacía del tablero. Cuando una casilla contiene una pieza del puzzle, el estado de esa casilla será la URL de la imagen de la pieza
  const [tablero, setTablero] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  //Estado para las imágenes
  const [imagenes, setImagenes] = useState([
    imagen0,
    imagen3,
    imagen6,
    imagen1,
    imagen4,
    imagen7,
    imagen2,
    imagen5,
    imagen8,
  ]);

  //Estado para la pieza seleccionada.Representa la URL de la imagen de la pieza seleccionada.
  const [piezaSelec, setPiezaSelec] = useState("");
  //Nuevo estado para almacenar el índice de la pieza seleccionada en el tablero.
  const [piezaSelecIdx, setPiezaSelecIdx] = useState(null);
  // Definir estado mensajeVisible
  const [mensajeVisible, setMensajeVisible] = useState(true);

  //Funciones manejadoras de eventos
  //Clic de la usuaria en las piezas
  const handleClickPieza = (pieza, idx) => {
    //pieza es la URL de la imágen y idx el índice de esa pieza en el array `imagenes`
    if (pieza === tablero[idx]) {
      // Si la pieza clicada es la que ya está seleccionada en el tablero
      setPiezaSelec(""); // Deseleccionar la pieza del tablero
      setTablero(tablero.map((pieza, i) => (i === idx ? null : pieza)));
      //map recorre el array`tablero` y para cada pieza,comprobamos si el índice (i) es igual al índice de la pieza seleccionada (idx).
      //Si es así, casilla tablero es null, sino, dejamos la casilla como está. Esto elimina la pieza del tablero.
      setPiezaSelecIdx(null); // Restablecemos el estado, ninguna pieza está seleccionada en el tablero
      //si la pieza en la que se hizo clic (pieza) no es igual a la pieza seleccionada en el tablero (tablero[idx]), entra el else
    } else {
      setPiezaSelec(pieza); //selecciona la pieza
      setPiezaSelecIdx(idx); //actualiza el índice de la pieza seleccionada en el tablero
    }
  };

  //Clic de la usuaria en las casillas del tablero
  const handleClickCasilla = (idx) => {
    //idx en el índice de la casilla en el tablero en la que se hizo clic
    if (tablero[idx]) {
      // Si la casilla en la que se hizo clic ya contiene una pieza-seleccionar la pieza del tablero para moverla
      setPiezaSelec(tablero[idx]); //establecemos el estado piezaSelec con la pieza que está en la casilla del tablero en la que se hizo clic
      setTablero(tablero.map((pieza, i) => (i === idx ? null : pieza)));
      //map recorre el array tablero y para cada pieza,
      //comprobamos si el indice(i) es igual al índice de la casilla en la que se hizo clic (idx).
      //Si es así, establecemos la casilla en null (vacía), sino, dejamos la casilla como está.
      //Esto vacía la casilla del tablero en la que se hizo clic.
      setPiezaSelecIdx(idx); // Actualizar el índice de la pieza seleccionada en el tablero

      //Si la casilla del tablrero en la que se hizo clic está vacía:tablero[idx] es null, entra el else
    } else {
      const newTablero = [...tablero]; //copia independiente de tablero
      newTablero[idx] = piezaSelec; //colocar la pieza seleccionada en la casilla vacía del tablero
      setTablero(newTablero); //reiniciar la selección de la pieza
      setPiezaSelec(""); //restablecer el índice de la pieza seleccionada en el tablero
      setPiezaSelecIdx(null); // Restablecer el índice de la pieza seleccionada en el tablero
    }
  };

  const checkCompleted = () => {
    return JSON.stringify(tablero) === JSON.stringify(imagenes);
  };

  const handleStartGame = () => {
    setMensajeVisible(false);
  };

  //Renderizamos el componente con su estructura HTML y elementos necesarios para el Puzzle
  return (
    <div className="puzzle__page">
      {mensajeVisible && (
        <div className="mensaje">
          <div className="mensaje__texto">
            <h2 className="mensaje__h2">
              ¡Descubre el mundo natural mientras haces un puzzle!
            </h2>
            <p className="mensaje__p">
              ¡Coloca cada pieza en su sitio haciendo clics y descubrirás un
              mensaje secreto sobre la naturaleza y por qué es importante
              cuidarla!
            </p>
            <div className="mensaje__button">
              <a className="button__text" onClick={handleStartGame}>
                ¡Comenzar!
              </a>
            </div>
          </div>
        </div>
      )}
      <header className="header">
        <div className="logo__header">
          <Link to="/">
            <img className="logo__header" src={NaturaLogo} alt="NaturaLogo" />
          </Link>
        </div>
        <div className="frase__header">
          <p>Construye un mundo sostenible pieza a pieza</p>
        </div>
      </header>
      <div className="page">
        {checkCompleted() && (
          <div className="mensaje">
            <div className="mensaje__texto">
              <h2 className="mensaje__h2">
                ¿Sabías por qué cambian los colores de los árboles?
              </h2>
              <p className="mensaje__p">
                Durante el verano, las hojas están llenas de un pigmento verde
                llamado clorofila que les da su color verde. Pero cuando llega
                el otoño y empieza a hacer más frío, las hojas comienzan a
                cambiar de color. Esto sucede porque la clorofila, que necesita
                mucha luz y calor, desaparece y revela otros colores que estaban
                escondidos todo el tiempo, como amarillos, naranjas, rojos. Por
                eso es importante proteger los bosques y cuidarlos, para que
                siempre podamos disfrutar de sus colores.
              </p>
              <Link to="/">
                <img
                  className="logo__message"
                  src={NaturaLogo}
                  alt="NaturaLogo"
                />
              </Link>
            </div>
          </div>
        )}
        <div className="tablero-container">
          <div className="tablero grid">
            {tablero.map((casilla, idx) => (
              <div
                key={idx}
                id={idx}
                onClick={() => handleClickCasilla(idx)}
                className={piezaSelecIdx === idx ? "selected" : ""}
              >
                {casilla && <img src={casilla} alt="" />}
              </div>
            ))}
          </div>
        </div>
        <div className="piezas-desordanadas-container">
          <div className="piezas-desordanadas">
            {imagenes.map((pieza, idx) => (
              <img
                style={{ order: order[idx] }}
                key={pieza}
                className={piezaSelec === pieza ? "active" : ""}
                src={pieza}
                alt=""
                onClick={() => handleClickPieza(pieza, idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default PuzzlePage; //exportamos el componente para que pueda ser utilizado en otros archivos
