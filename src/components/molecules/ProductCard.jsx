import React from "react";
import "../../App.css";
import Button from "../atoms/Button";
import Card from "../atoms/Card";
import ProductName from "../atoms/ProductName";
import ProductPrice from "../atoms/ProductPrice";
import { useDispatch } from "react-redux";

import { productAdd } from "../../redux/slices/productosSlice";
import { addToCart } from "../../redux/slices/usuarioSlice";
import { useNavigate } from "react-router";

function ProductCard({ producto }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addProduct = () => {
    dispatch(addToCart(producto));
    dispatch(productAdd(producto));
  };

  return (
    <div className="md:w-1/3 sm:w-1/2 my-5 ">

    <div className="mx-3  h-full ">
      <Card>
        <div className=" flex items-center flex-col">
          <img
            alt="imagen_producto"
            className="w-3/4"
            src={require("../../assets/image-product.jpg")}
          />
          <ProductName nombre={producto.title} />
          <ProductPrice precio={producto.price} />
          {producto.isAdd ? (
            <Button
              placeholder={"Ver carrito"}
              onClick={() => navigate("/carrito")}
            />
          ) : (
            <Button
              onClick={() => addProduct()}
              placeholder={"Agregar al carrito"}
            />
          )}
        </div>
      </Card>
    </div>
    </div>
  );
}

export default ProductCard;
