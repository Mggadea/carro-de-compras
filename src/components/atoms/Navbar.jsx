import React from "react";
import { Link, Route } from "react-router-dom";
import Perfil from "../../data/profile.json";

function Navbar() {
  return (
    <div className="bg-zinc-800 text-white h-16 flex items-center justify-between p-4">
      <Link to="/">
        <p className="font-bold text-lg">Tienda de productos</p>
      </Link>

      <div className="flex">
        <p >Juani Ignacio</p>

        <Link className='mx-4' to="/carrito">
          <p>Carrito</p>
        </Link>
        <p>Crédito</p>
      </div>
    </div>
  );
}

export default Navbar;
