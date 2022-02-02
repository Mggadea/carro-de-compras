import React from "react";

export const SearchProduct = ({ filtro, setFiltro }) => {
  return (
    <>
      <input
        type="text"
        onChange={(e) => setFiltro(e.target.value)}
        value={filtro}
        placeholder="Buscar productos por nombre"
        className="bg-gray-100 border-gray-300 border  p-2 w-1/4 h-10 rounded"
      />
    </>
  );
};
