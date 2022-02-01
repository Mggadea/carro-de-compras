import React from "react";
import Button from "../atoms/Button";
import  {useNavigate}  from "react-router";


function CartButtons({finalizarCompra}) {
  const navigate = useNavigate();
  
  const handleNavigate = () => {
    navigate("/");
  };


  return (
    <div className="flex justify-between mt-4 ">
      <div className="w-1/8 ">
          <Button onClick={handleNavigate} placeholder={"Volver al catálogo"} />
      </div>

      <div className="w-1/8 ">
        <Button onClick={finalizarCompra} placeholder={"Finalizar Compra"} />
      </div>
    </div>
  );
}

export default CartButtons;
