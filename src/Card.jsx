//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import React from 'react';

function Card({ nombre, album, genero}) => {
    return (
      <div>
        <h3>nombre: {nombre}</h3>
        <h3>album: {album}</h3>
        <h3>genero: {genero}</h3>
      </div>
    );
  }
  
  export default Card;