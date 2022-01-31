import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const {shoppingCart,datos: { credit, firstName }} = useSelector((state) => state.user);

  return (
    <div className="bg-zinc-800 text-white h-16 flex items-center justify-between p-4">
      <Link to="/">
        <p className="font-bold text-lg">Tienda de productos</p>
      </Link>

      <div className="flex">
        <p>{firstName}</p>

        <Link className="mx-4" to="/carrito">
          <p>{`Carrito (${shoppingCart.length})`}</p>
        </Link>
        <p>{`Crédito $ ${credit}`}</p>
      </div>
    </div>
  );
}

export default Navbar;
