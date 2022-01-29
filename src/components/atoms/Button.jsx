import React from "react";
import "../../App.css";



function Button({ placeholder }) {
  return (
    <> 
      <button className="rounded bg-zinc-800 mt-4 text-white p-2 w-full ">
        {placeholder}
      </button>
    </>
  );
}

export default Button;
