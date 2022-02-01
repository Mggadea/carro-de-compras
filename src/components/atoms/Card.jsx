import React from "react";
import "../../App.css";

function Card({ children }) {
  return (
    <div className="flex rounded card bg-white h-full w-full p-5 ">
      {children}
    </div>
  );
}

export default Card;
