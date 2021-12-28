import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import PintarDatos from "./components/PintarDatos";

const App = () => {
  const [personaje, setPersonaje] = useState("");

  useEffect(() => {
    if (localStorage.getItem("personaje")) {
      setPersonaje(JSON.parse(localStorage.getItem("personaje")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("personaje", JSON.stringify(personaje));
  }, [personaje]);

  return (
    <div className="container mt-3">
      <Formulario setPersonaje={setPersonaje} />
      <PintarDatos personaje={personaje} />
    </div>
  );
};

export default App;
