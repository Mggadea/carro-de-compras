import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Catalogo from "./components/screens/Catalogo";
import Carrito from "./components/screens/Carrito";
import EstadoCompra from "./components/screens/EstadoCompra";
import Navbar from "./components/atoms/Navbar";

import { loadProducts } from "./redux/slices/productosSlice";
import { loadUser } from "./redux/slices/usuarioSlice";

import products from "./data/products.json";
import profile from "./data/profile.json";

const App = () => {
  const dispatch = useDispatch();
  dispatch(loadProducts(products.productos));
  dispatch(loadUser(profile.profile));

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Catalogo />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/estadoCompra" element={<EstadoCompra />} />
      </Routes>
    </>
  );
};

export default App;
