import React from 'react';

function button({placeholder}) {
  return <div>
    <button className="btn btn-primary">{placeholder}</button>
  </div>;
}

export default button;
