import { useState } from "react";
import imagen0 from "../images/00.jpg";
import imagen1 from "../images/01.jpg";
import imagen2 from "../images/02.jpg";
import imagen3 from "../images/03.jpg";
import imagen4 from "../images/04.jpg";
import imagen5 from "../images/05.jpg";
import imagen6 from "../images/06.jpg";
import imagen7 from "../images/07.jpg";
import imagen8 from "../images/08.jpg";

function PuzzlePage() {
  const [tablero, setTablero] = useState([
    // Se define el estado tablero y una función para actualizarlo
    null, //Iniciamos cada casilla del tablero como nula
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [imagenes, setImagenes] = useState([
    // Define el estado imagenes y una función para actualizarlo
    imagen0, // Iniciamos la lista de imágenes de las piezas del puzzle
    imagen1,
    imagen2,
    imagen3,
    imagen4,
    imagen5,
    imagen6,
    imagen7,
    imagen8,
  ]);

  const [piezaSelec, setPiezaSelec] = useState(""); // Define el estado piezaSelec y una función para actualizarlo

  /*const handleClickPieza = (event) => {
    setPiezaSelec(event.currentTarget.src);
  };*/

  const handleClickPieza = (event) => {
    const piezaSeleccionada = event.currentTarget.src; // Obtiene la URL de la imagen de la pieza seleccionada

    // Verificar si la pieza seleccionada es la misma que la actualmente seleccionada
    if (piezaSeleccionada === piezaSelec) {
      setPiezaSelec(""); // Si es la misma, deselecciona la pieza
    } else {
      setPiezaSelec(piezaSeleccionada); // Si no es la misma, establece la nueva pieza seleccionada
    }
  };

  const handleClickCasilla = (event) => {
    const posicionCasillaEnElTablero = event.currentTarget.id; // Obtiene la posición de la casilla en el tablero

    const tableroClonado = [...tablero]; // Clona el tablero actual para poder modificarlo
    tableroClonado[posicionCasillaEnElTablero] = piezaSelec; // Asigna la pieza seleccionada a la posición de la casilla en el tablero clonado

    setTablero(tableroClonado); // Actualiza el estado del tablero con el tablero clonado
    setPiezaSelec(""); // Deselecciona la pieza seleccionada después de colocarla en el tablero
  };

  return (
    <div className="page">
      <div className="tablero-container">
        <div className="tablero grid">
          {tablero.map((casilla, idx) =>
            casilla === null ? (
              <div key={idx} id={idx} onClick={handleClickCasilla}></div>
            ) : (
              <img key={idx} src={casilla} />
            )
          )}
        </div>
      </div>
      <div className="piezas-desordanadas-container">
        <div className="piezas-desordanadas">
          {imagenes.map((pieza) => (
            <img
              key={pieza}
              className={piezaSelec.endsWith(pieza) && "active"}
              src={pieza}
              alt=""
              onClick={handleClickPieza}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PuzzlePage;
