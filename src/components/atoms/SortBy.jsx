import React from 'react';

const SortBy = ({ordenar,setOrdenar}) => {
  return <>
   <div className="flex flex-col">
          <p className="text-gray-500">ORDENAR POR</p>
          <select
            onChange={(e) => setOrdenar(e.target.value)}
            value={ordenar}
            className="bg-gray-100 border-gray-300 border p-2 h-10 rounded"
            name="ordenar"
            id="ordenar"
          >
            <option value="Seleccionar">Seleccionar</option>
            <option value="Ascendente">Más baratos</option>
            <option value="Descendente">Más caros</option>
          </select>
        </div>
  </>;
};

export default SortBy;
