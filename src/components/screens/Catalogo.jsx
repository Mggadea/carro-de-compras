import React from "react";
import Products from "../organisms/Products";
import ScreenName from "../atoms/ScreenName";

function Catalogo() {
  return (
    <div className="flex flex-col  items-center w-full ">
      <div className="flex  flex-col w-7/12  items-center justify-center my-5 ">
        <ScreenName nombre="Catálogo" />
        <Products />
      </div>
    </div>
  );
}

export default Catalogo;
