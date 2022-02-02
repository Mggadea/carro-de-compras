import React, { useState, useEffect } from "react";
import ProductCard from "../molecules/ProductCard";

import { useSelector } from "react-redux";
function Products() {
  const Products = useSelector((state) => state.product.Products);

  const [productosOrdenados, setProductosOrdenados] = useState(Products);

  const [filtro, setFiltro] = useState("");

  const [ordenar, setOrdenar] = useState("Seleccionar");

  useEffect(() => {
    if (ordenar === "Seleccionar") {
      setProductosOrdenados(Products);
    } 
     if (ordenar === "Ascendente") {
        setProductosOrdenados((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
        );
    }
     if (ordenar === "Descendente") {
        setProductosOrdenados((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
        );
    }
}, [ordenar, Products]);

  return (
    <>
      <div className="flex flex-row justify-between w-full items-center px-3 ">
        <input
          type="text"
          onChange={(e) => setFiltro(e.target.value)}
          value={filtro}
          placeholder="Buscar productos por nombre"
          className="bg-gray-100 border-gray-300 border  p-2 w-1/ h-10 rounded"
        />

        
        <div className="flex flex-col">
          <p className="text-gray-500">ORDENAR POR</p>
          <select
            onChange={(e) => setOrdenar(e.target.value)}
            value={ordenar}
            className="bg-gray-100 border-gray-300 border p-2 h-10 rounded"
            name="ordenar"
            id="ordenar"
          >
            <option value="Seleccionar">Seleccionar</option>
            <option value="Ascendente">Más baratos</option>
            <option value="Descendente">Más caros</option>
          </select>
        </div>
      </div>
      <div className=" flex flex-wrap my-1 ">
        {productosOrdenados.filter((val) => {
          if (filtro === "") {
            return val;
          } else if (val.title.toLowerCase().includes(filtro.toLowerCase()))
            return val;
        }).map((product, index) => (
          <ProductCard producto={product} key={index} />
        ))}
      </div>
    </>
  );
}

export default Products;
