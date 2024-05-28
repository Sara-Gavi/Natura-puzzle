//La función useState permite agregar estado a los componentes de React
import { useState } from "react";
//imagenes para las piezas del Puzzle
import imagen0 from "../images/00.jpg";
import imagen1 from "../images/01.jpg";
import imagen2 from "../images/02.jpg";
import imagen3 from "../images/03.jpg";
import imagen4 from "../images/04.jpg";
import imagen5 from "../images/05.jpg";
import imagen6 from "../images/06.jpg";
import imagen7 from "../images/07.jpg";
import imagen8 from "../images/08.jpg";
//Importamos componentes
import Message from "./Message";
import Header from "./Header";
import FinalMessage from "./FinalMessage";

//const order = [4, 7, 1, 0, 2, 6, 8, 3, 5]; Piezas desordenadas manualmente
//constante para tener el orden inicial de las piezas del puzzle
const order = [0, 1, 2, 3, 4, 5, 6, 7, 8].sort(() => Math.random() * 2 - 1);
console.log(order);
function PuzzlePage() {
  //Definir estados necesarios para el puzzle(tablero, imágenes de las piezas, piezas seleccionadas, mensaje de inicio)
  //Estado para el tablero
  //Utilizamos null para representar una casilla vacía del tablero. Cuando una casilla contiene una pieza del puzzle, el estado de esa casilla será la URL de la imagen de la pieza
  const [board, setBoard] = useState([
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
  const [images, setImages] = useState([
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

  //Estado para la pieza seleccionada. Representa la URL de la imagen de la pieza seleccionada.
  const [selectedPiece, setSelectedPiece] = useState("");
  //Nuevo estado para almacenar el índice de la pieza seleccionada en el tablero.
  const [selectedPieceIdx, setSelectedPieceIdx] = useState(null);
  // Definir estado messageVisible
  const [messageVisible, setMessageVisible] = useState(true);

  //Funciones manejadoras de eventos
  //Clic de la usuaria en las piezas
  const handleClickPiece = (piece, idx) => {
    //pieza es la URL de la imágen y idx el índice de esa pieza en el array `imagenes`
    if (piece === board[idx]) {
      // Si la pieza clicada es la que ya está seleccionada en el tablero
      setSelectedPiece(""); // Deseleccionar la pieza del tablero
      setBoard(board.map((pieza, i) => (i === idx ? null : pieza)));
      //map recorre el array`tablero` y para cada pieza,comprobamos si el índice (i) es igual al índice de la pieza seleccionada (idx).
      //Si es así, casilla tablero es null, sino, dejamos la casilla como está. Esto elimina la pieza del tablero.
      setSelectedPieceIdx(null); // Restablecemos el estado, ninguna pieza está seleccionada en el tablero
      //si la pieza en la que se hizo clic (pieza) no es igual a la pieza seleccionada en el tablero (tablero[idx]), entra el else
    } else {
      setSelectedPiece(piece); //selecciona la pieza
      setSelectedPieceIdx(idx); //actualiza el índice de la pieza seleccionada en el tablero
    }
  };

  //Clic de la usuaria en las casillas del tablero
  const handleClickCell = (idx) => {
    //idx en el índice de la casilla en el tablero en la que se hizo clic
    if (board[idx]) {
      // Si la casilla en la que se hizo clic ya contiene una pieza-seleccionar la pieza del tablero para moverla
      setSelectedPiece(board[idx]); //establecemos el estado selectedPiece con la pieza que está en la casilla del tablero en la que se hizo clic
      setBoard(board.map((piece, i) => (i === idx ? null : piece)));
      //map recorre el array tablero y para cada pieza,
      //comprobamos si el indice(i) es igual al índice de la casilla en la que se hizo clic (idx).
      //Si es así, establecemos la casilla en null (vacía), sino, dejamos la casilla como está.
      //Esto vacía la casilla del tablero en la que se hizo clic.
      setSelectedPieceIdx(idx); // Actualizar el índice de la pieza seleccionada en el tablero

      //Si la casilla del tablrero en la que se hizo clic está vacía:tablero[idx] es null, entra el else
    } else {
      const newBoard = [...board]; //copia independiente de tablero
      newBoard[idx] = selectedPiece; //colocar la pieza seleccionada en la casilla vacía del tablero
      setBoard(newBoard); //reiniciar la selección de la pieza
      setSelectedPiece(""); //restablecer el índice de la pieza seleccionada en el tablero
      setSelectedPieceIdx(null); // Restablecer el índice de la pieza seleccionada en el tablero
    }
  };

  const checkCompleted = () => {
    return JSON.stringify(board) === JSON.stringify(images);
  };

  const handleStartGame = () => {
    setMessageVisible(false);
  };

  //Renderizamos el componente con su estructura HTML y elementos necesarios para el Puzzle
  return (
    <div className="puzzle__page">
      {messageVisible && <Message handleStartGame={handleStartGame} />}
      <Header />
      <div className="page">
        {checkCompleted() && <FinalMessage />}
        <div className="board__container">
          <div className="board__grid">
            {board.map((cell, idx) => (
              //método map para iterar sobre cada elemento del array tablero.
              //Por cada elemento (casilla) en el tablero, ejecutamos una función que devuelve un elemento JSX
              <div
                key={idx} //Para darle a cada casilla un identificador único
                id={idx} //cada casilla tiene un identificador único igual al índice de esa casilla en el array tablero
                onClick={() => handleClickCell(idx)} //manejador de eventos para el clic en la casilla, llama a la función handleClickCasilla
                className="board__div"
              >
                {cell && <img className="board__image" src={cell} alt="" />}
                {/* condicional Si casilla tiene un valor(true), el código después del && se ejecuta*/}
                {/* <img src={casilla} Esto crea un elemento <img>, casilla es la URL de la imagen que se va a mostrar en la casilla del tablero */}
              </div>
            ))}
          </div>
        </div>
        <div className="pieces__container">
          <div className="pieces__div">
            {images.map((piece, idx) => (
              <img
                style={{ order: order[idx] }}
                key={piece}
                className="pieces__image"
                src={piece}
                alt=""
                onClick={() => handleClickPiece(piece, idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default PuzzlePage; //exportamos el componente para que pueda ser utilizado en otros archivos
