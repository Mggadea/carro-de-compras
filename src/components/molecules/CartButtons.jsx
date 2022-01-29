import React from "react";
import Button from "../atoms/Button";

function CartButtons() {
  return (
    <div className="flex justify-between ">
      <div className="w-1/8 ">
        <Button placeholder={"Volver al catálogo"} />
      </div>

      <div className="w-1/8 ">
        <Button placeholder={"Finalizar Compra"} />
      </div>
    </div>
  );
}

export default CartButtons;
