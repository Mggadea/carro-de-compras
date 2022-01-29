import React from "react";
import Card from "../atoms/Card";
import CartButtons from "../molecules/CartButtons";
import ScreenName from "../atoms/ScreenName";
import TotalCompra from "../molecules/TotalCompra";

function Carrito() {
  return (
    <div className="flex flex-col justify-center items-center">
      <ScreenName nombre="Carrito" />

      <div className=" w-8/12">
        <Card>
          <h1>galaxy</h1>
        </Card>

       <TotalCompra />
        <CartButtons />
      </div>
    </div>
  );
}

export default Carrito;
