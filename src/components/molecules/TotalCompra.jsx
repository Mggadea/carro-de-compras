import React from "react";
import Card from "../atoms/Card";

function TotalCompra() {
  return (
    <>
      <Card>
        <div className="flex justify-between  w-full">
          <div className=" w-1/8">
            <p className="font-bold">Total</p>
          </div>

          <div className=" w-1/8">
            <p className="font-bold">$ 10.000</p>
          </div>
        </div>
      </Card>
    </>
  );
}

export default TotalCompra;
