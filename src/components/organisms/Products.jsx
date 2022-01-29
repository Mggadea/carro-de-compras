import React from "react";
import ProductCard from "../molecules/ProductCard";
import ProductsData from "../../data/products.json";

function Products() {
  return (
    <div className=" flex flex-wrap mx-10 w-8/12 my-10 ">
      {ProductsData.productos.map((product, index) => {
        return (
          <div className="md:w-1/3 sm:w-1/2 my-5 ">
            <ProductCard
              nombre={product.title}
              precio={product.price}
              id={index}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Products;
