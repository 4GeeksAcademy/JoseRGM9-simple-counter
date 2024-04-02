import React, { useState, useEffect } from 'react';

const SimpleCounter = () => {
  const [counter, setCounter] = useState(0);
  const [pausarContador, setpausarContador] = useState(false);

  useEffect(() => {
    if (!pausarContador){
    const interval = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }}, [pausarContador]);

  const digitoHoras = () => Math.floor(counter / 3600);
  const digitoMinutos = () => Math.floor((counter % 3600) / 60);
  const digitoSegundos = () => counter % 60;

  const ceroIzquierda = (number) => {
    return number < 10 ? '0' + number : number.toString();
  };

  const botonPausar = () => {
    setpausarContador(!pausarContador);
  };

  return (
    <div>
    <div className="ContenedorContador">
      <div className="contenedorClock">
      <div className="Calendar">
        <i className="far fa-clock"></i>
      </div>
      </div>
      <div className="contenedorHoras">
        <div className="Tres">{ceroIzquierda(digitoHoras())} H</div>
      </div>
      <div className="contenedorMinutos">
        <div className="Dos">{ceroIzquierda(digitoMinutos())} Min</div>
      </div>
      <div className="contenedorSegundos">
        <div className="Uno">{ceroIzquierda(digitoSegundos())} Seg</div>
      </div>
    </div>
    <div className="contenedorBotones">
      <button onClick={botonPausar} className="botonPausar">{pausarContador ? 'Reanudar' : 'Pausar'}</button>
    </div>
    </div>
  );
};

export default SimpleCounter;