import React from "react";
import Card from "../atoms/Card";

function TotalCompra({total}) {
  return (
  
    <div className="mt-5">
      <Card>
        <div className="flex justify-between  w-full mr-4">
          <div className="w-1/8">
            <p className="font-bold text-xl">Total</p>
          </div>

          <div className=" w-1/8">
            <p className="font-bold text-xl">$ {total}</p>
          </div>
        </div>
      </Card>
    </div>
      
 
  );
}

export default TotalCompra;
