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

  const [imagenes, setImagenes] = useState([
    imagen0,
    imagen1,
    imagen2,
    imagen3,
    imagen4,
    imagen5,
    imagen6,
    imagen7,
    imagen8,
  ]);

  const [piezaSelec, setPiezaSelec] = useState("");
  const [piezaSelecIdx, setPiezaSelecIdx] = useState(null); // Nuevo estado para almacenar el índice de la pieza seleccionada en el tablero

  const handleClickPieza = (pieza, idx) => {
    if (pieza === tablero[idx]) { // Si la pieza clicada es la que ya está seleccionada en el tablero
      setPiezaSelec(""); // Deseleccionar la pieza del tablero
      setTablero(tablero.map((pieza, i) => (i === idx ? null : pieza))); // Vaciar la casilla del tablero
      setPiezaSelecIdx(null); // Restablecer el índice de la pieza seleccionada en el tablero
    } else {
      setPiezaSelec(pieza);
      setPiezaSelecIdx(idx);
    }
  };

  const handleClickCasilla = (idx) => {
    if (tablero[idx]) { // Si la casilla ya contiene una pieza
      setPiezaSelec(tablero[idx]); // Seleccionar la pieza del tablero
      setTablero(tablero.map((pieza, i) => (i === idx ? null : pieza))); // Vaciar la casilla del tablero
      setPiezaSelecIdx(idx); // Actualizar el índice de la pieza seleccionada en el tablero
    } else {
      const newTablero = [...tablero];
      newTablero[idx] = piezaSelec;
      setTablero(newTablero);
      setPiezaSelec("");
      setPiezaSelecIdx(null); // Restablecer el índice de la pieza seleccionada en el tablero
    }
  };

  return (
    <div className="page">
      <div className="tablero-container">
        <div className="tablero grid">
          {tablero.map((casilla, idx) => (
            <div
              key={idx}
              id={idx}
              onClick={() => handleClickCasilla(idx)}
              className={piezaSelecIdx === idx ? "selected" : ""} // Resaltar visualmente la casilla seleccionada en el tablero
            >
              {casilla && <img src={casilla} />}
            </div>
          ))}
        </div>
      </div>
      <div className="piezas-desordanadas-container">
        <div className="piezas-desordanadas">
          {imagenes.map((pieza, idx) => (
            <img
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
  );
}

export default PuzzlePage;