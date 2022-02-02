import React, { useState, useEffect } from "react";
import ProductCard from "../molecules/ProductCard";
import { useSelector } from "react-redux";
import Filters from "../molecules/Filters";



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
      setProductosOrdenados(
        (prev) => [...prev].sort((a, b) => a.price - b.price) //ordena de menor a mayor
      );
    }
    if (ordenar === "Descendente") {
      setProductosOrdenados(
        (prev) => [...prev].sort((a, b) => b.price - a.price) //ordena de mayor a menor
      );
    }
  }, [ordenar, Products]);

  return (
    <>
    <Filters filtro={filtro} setFiltro={setFiltro} ordenar={ordenar} setOrdenar={setOrdenar}    />
      
      <div className=" flex flex-wrap my-1 ">
        {productosOrdenados
          .filter((val) => {
            if (filtro === "") {
              return val;
            } else if (val.title.toLowerCase().includes(filtro.toLowerCase()))
              return val;
          })
          .map((product, index) => (
            <ProductCard producto={product} key={index} />
          ))}
      </div>
    </>
  );
}

export default Products;
