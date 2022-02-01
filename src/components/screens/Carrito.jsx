import React, { useEffect } from "react";
import Card from "../atoms/Card";
import CartButtons from "../molecules/CartButtons";
import ScreenName from "../atoms/ScreenName";
import TotalCompra from "../molecules/TotalCompra";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../organisms/CartItem";
import { resetProducts } from "../../redux/slices/productosSlice";
import { debitCredit } from "../../redux/slices/usuarioSlice";
import { useNavigate } from "react-router";

function Carrito() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [total, setTotal] = React.useState(0);
  const {
    shoppingCart,
    datos: { credit },
  } = useSelector((state) => state.user);

  useEffect(() => {
    setTotal(
      shoppingCart.reduce((total, product) => {
        return total + product.price;
      }, 0)
    );
  }, [shoppingCart]);

  const finalizarCompra = () => {
    if (credit >= total) {
      dispatch(debitCredit(credit - total));
      dispatch(resetProducts());
      navigate("/estadoCompra");
    } else {
      navigate("/estadoCompra");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {shoppingCart.length > 0 ? (
        <div className=" w-8/12">
          <ScreenName nombre="Carrito" />
          <Card>
            <div className="flex flex-col w-full ">
              {shoppingCart.map((product, index) => (
                <CartItem product={product} />
              ))}
            </div>
          </Card>
          <TotalCompra total={total} />
          <CartButtons finalizarCompra={finalizarCompra} />
        </div>
      ) : (
        <ScreenName nombre="No hay productos en el carrito" />
      )}
    </div>
  );
}

export default Carrito;
