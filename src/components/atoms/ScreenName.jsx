import React from "react";

function ScreenName({nombre}) {
  return (
    <div className="flex justify-center my-5">
      <h1 className="text-5xl font-bold">{nombre}</h1>
    </div>
  );
}

export default ScreenName;
