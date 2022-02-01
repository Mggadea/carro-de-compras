import React from "react";
import "../../App.css";

const  Button = ({ placeholder, onClick })=> {
  return (
    <button onClick={onClick} className="rounded bg-zinc-800 mt-4 text-white p-2 w-full ">
    {placeholder}
  </button>
  );
}

export default Button;
