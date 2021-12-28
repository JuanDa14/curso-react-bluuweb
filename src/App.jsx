import { useState } from "react";
import Formulario from "./components/Formulario";
import PintarDatos from "./components/PintarDatos";

const App = () => {
  const [personaje, setPersonaje] = useState("");

  return (
    <div className="container mt-3">
      <Formulario setPersonaje={setPersonaje} />
      <PintarDatos personaje={personaje} />
    </div>
  );
};

export default App;
