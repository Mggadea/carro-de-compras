import React, {useState} from "react";
import ProductCard from "../molecules/ProductCard";

import { useSelector } from "react-redux";
function Products() {
  const Products = useSelector((state) => state.product.Products);

  const [filtro, setFiltro] = useState("");

  return (
    <>
      <div className="flex flex-row justify-between w-full items-center px-3 ">
        <input
          type="text"
          value={filtro}
          placeholder="Buscar productos por nombre"
          className="bg-gray-100 border-gray-300 border  p-2 w-1/ h-10 rounded"
        />
        <div className="flex flex-col">
          <p className="text-gray-500">ORDENAR POR</p>
          <select className="bg-gray-100 border-gray-300 border p-2 h-10 rounded" name="cars" id="cars">
            <option value="select">Seleccionar</option>
            <option value="cheaper">Más baratos</option>
            <option value="expensier">Más caros</option>
          </select>
        </div>
      </div>
      <div className=" flex flex-wrap my-1 ">
        {Products.map((product, index) => {
          return (
            <div className="md:w-1/3 sm:w-1/2 my-5 ">
              <ProductCard producto={product} id={index} key={index} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
