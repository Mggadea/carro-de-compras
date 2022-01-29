import React from "react";

function ProductPrice({precio}) {
  return (
    <>
      <p className="font-semibold text-lg mt-10">$ {precio}</p>
    </>
  );
}

export default ProductPrice;
