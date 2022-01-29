import React from "react";
import "../../App.css";
import Button from "../atoms/Button";
import Card from "../atoms/Card";
import ProductName from "../atoms/ProductName";
import ProductPrice from "../atoms/ProductPrice";

function ProductCard({ nombre, precio, id }) {
  return (
    <div className="mx-3  h-full ">
      <Card>
        <div className=" flex items-center flex-col">
        <img
          alt="imagen_producto"
          className="w-3/4"
          src={require("../../assets/image-product.jpg")}
        />
        <ProductName nombre={nombre} />
        <ProductPrice precio={precio} />
        <Button placeholder={"Agregar al carrito"} />
        </div>
      </Card>
    </div>
  );
}

export default ProductCard;
