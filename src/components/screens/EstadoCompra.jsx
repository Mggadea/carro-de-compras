import React, { useEffect } from "react";
import Button from "../atoms/Button";
import Card from "../atoms/Card";
import ScreenName from "../atoms/ScreenName";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

function EstadoCompra() {
  const navigate = useNavigate();

  const { shoppingCart } = useSelector((state) => state.user);
  const [buy, setbuy] = React.useState(false);

  const handleNavigateCatalogo = () => {
    navigate("/");
  };
  const handleNavigateCarrito = () => {
    navigate("/carrito");
  };

  useEffect(() => {
    if (shoppingCart.length > 0) {
      setbuy(true);
    } else {
      setbuy(false);
    }
  }, [shoppingCart]);

  return (
    <div className="flex flex-col items-center">
      <ScreenName nombre="Estado de Compra" />
      <div className="flex flex-col items-center mt-10  w-1/2">
        <Card>
          <div className="flex flex-col w-full items-center">
            {buy ? (
              <>
                <h1>
                  Ocurrió un problema con la compra, revisá que el importe no
                  supere el crédito disponible en tu cuenta
                </h1>
                <Button
                  placeholder={"Volver al carrito"}
                  onClick={handleNavigateCarrito}
                />
              </>
            ) : (
              <>
                <h1>La compra se realizó con éxito</h1>

                <Button
                  placeholder={"Volver al catálogo"}
                  onClick={handleNavigateCatalogo}
                />
              </>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default EstadoCompra;
