import React, { useState, useEffect } from "react";
import ProductCard from "../molecules/ProductCard";
import { useSelector } from "react-redux";
import Filters from "../molecules/Filters";
import Paginación from "../molecules/Paginación";

function Products() {
  const Products = useSelector((state) => state.product.Products);

  const [page, setPage] = useState(1);

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

  const productsPerPage = 6;

  const pagesVisited = page * productsPerPage;

  const indexOfFirstProduct = pagesVisited + productsPerPage;

  const productsFilter = productosOrdenados.filter((val) =>
    val.title.toLowerCase().includes(filtro.toLowerCase())
  );


  const displayProducts = productsFilter
    .slice(pagesVisited, indexOfFirstProduct)
    .map((product, index) => {
      return <ProductCard key={index} producto={product} />;
    });

  return (
    <>
      <Filters filtro={filtro} setFiltro={setFiltro} ordenar={ordenar} setOrdenar={setOrdenar} />
      <div className=" flex flex-wrap my-1 ">{displayProducts}</div>
      <Paginación productosOrdenados={productosOrdenados} productsPerPage={productsPerPage} setPage={setPage} />
    
    </>
  );
}

export default Products;
