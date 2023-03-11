import { useState } from "react";
import { send } from "vite";
import Card from "./Card";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [nombre, setNombre] = useState("");
  const [album, setAlbum] = useState("");
  const [genro, setGenero] = useState("");

  const handleChangeNombre = (event) => {
    setNombre(event.target.value)
  };

  const handleChangeAlbum = (event) => {
    setAlbum(event.target.value)
  };

  const handleChangeGenero = (event) => {
    setGenero(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  
    if (withoutSpace.length >= 4) {
      return true;
    } else {
      setErrorSelect("Nombre no válido");
      return false;
    }    
  };

  const completarIngreso = (nombre, album, genero) => {
    if (nombre === "" || album === "" || genero === "") {
      setErrorSelect("Completar los campos");
      setSend(false);
      return false;
    } else {
      return true;
    }
    setSeMuestraCard(true)
  };

  const handleSubmitmusico = (event) => {
    event.preventDefault();
    if (nombre.length <= 3 || nombre[0] === " ") {
      setSeMuestraAlerta(true)
      setMensajeDeAlerta("Ingresa información correcta de nuevo")
      return
  }
  setSeMuestraCard(true)

  const alerta = () => {
    setSeMuestraAlerta(false)
    setMensajeDeAlerta("")
    setNombre("")
    setGenero("")
    setAlbum("")
  }



  return (
    <div className="App">
      <h1>Elige un color</h1>
      <form onSubmit = {handleSubmit}>

      <input type="text" onChange={handleChangeNombre} value={nombre} />
      <input type="text" onChange={handleChangeAlbum} value={album} />
      <input type="text" onChange={handleChangeGenero} value={genero} />
      <input type="submit" value="consultar" />
      
      </form>

      {send && (
        <Card
        nombre = {nombre}
        album = {album}
        genero = {genero}
        />
      )}
    </div>
  );
}

export default App;
