//La función useState permite agregar estado a los componentes de React
import { useState } from "react";
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

//const order = [4, 7, 1, 0, 2, 6, 8, 3, 5];

const order = [0, 1, 2, 3, 4, 5, 6, 7, 8].sort(() => Math.random() * 2 - 1);
console.log(order);
function PuzzlePage() {
  //Inicializamos los estados necesarios para el tablero, las imágenes de las piezas y las piezas seleccionadas
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
    imagen3,
    imagen6,
    imagen1,
    imagen4,
    imagen7,
    imagen2,
    imagen5,
    imagen8,
  ]);

  const [piezaSelec, setPiezaSelec] = useState("");
  const [piezaSelecIdx, setPiezaSelecIdx] = useState(null); // Nuevo estado para almacenar el índice de la pieza seleccionada en el tablero

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

  //Renderizamos el componente con su estructura HTML y elementos necesarios para el Puzzle
  return (
    <div className="page">
      {checkCompleted() && <p>Compoleto!</p>}
      <div className="tablero-container">
        <div className="tablero grid">
          {tablero.map(
            (
              casilla,
              idx // renderizamos las casillas tablero y como se comportaran cuando la usuaria haga clic
            ) => (
              <div
                key={idx}
                id={idx}
                onClick={() => handleClickCasilla(idx)}
                className={piezaSelecIdx === idx ? "selected" : ""} // Resaltar visualmente la casilla seleccionada en el tablero
              >
                {casilla && <img src={casilla} />}
              </div>
            )
          )}
        </div>
      </div>
      <div className="piezas-desordanadas-container">
        <div className="piezas-desordanadas">
          {imagenes.map(
            (
              pieza,
              idx //Renderizamos de piezas desordenadas y como se comportarán cuando la usuaria haga clic en ellas
            ) => (
              <img
                style={{ order: order[idx] }}
                key={pieza}
                className={piezaSelec === pieza ? "active" : ""}
                src={pieza}
                alt=""
                onClick={() => handleClickPieza(pieza, idx)}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default PuzzlePage; //Exportamos el componente para poder usarlo en otras partes de la aplización
