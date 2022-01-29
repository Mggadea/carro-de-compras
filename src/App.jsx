import { Routes, Route } from "react-router-dom";

import Catalogo from "./components/screens/Catalogo";
import Carrito from "./components/screens/Carrito";
import EstadoCompra from "./components/screens/EstadoCompra";
import Navbar from "./components/atoms/Navbar";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Catalogo />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/estadoCompra" element={<EstadoCompra />} />
      </Routes>
    </>
  );
}

export default App;
