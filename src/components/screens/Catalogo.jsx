import React from "react";
import Products from "../organisms/Products";
import ScreenName from '../atoms/ScreenName';

function Catalogo() {
  return (
    <div className="flex  flex-col w-full items-center justify-center my-5 ">
      <ScreenName nombre="Catálogo" />
      <Products />
    </div>
  );
}

export default Catalogo;
