import React from "react";
import Button from "../atoms/Button";
import { useDispatch } from "react-redux";
import { productRemove } from "../../redux/slices/productosSlice";
import { removeToCart } from "../../redux/slices/usuarioSlice";

function CartItem({ product }) {
  const dispatch = useDispatch();

  const removeProduct = () => {
    dispatch(removeToCart(product));
    dispatch(productRemove(product));
  };

  return (
    <div className="flex justify-between items-center w-full mt-4   bg-gray-200 pr-2 rounded">
      
      <div className="flex flex-row items-center">

        <img
          alt="imagen_producto"
          className="w-16 rounded"
          src={require("../../assets/image-product.jpg")}
        />
        <p className="ml-2">{product.title}</p>
      </div>
      <div className="flex flex-row items-center ">
        <div>
          <p>{`$ ${product.price}`}</p>
        </div>
        <div className="mb-2 ml-2">
          <Button onClick={() => removeProduct()} placeholder={"X"} />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
