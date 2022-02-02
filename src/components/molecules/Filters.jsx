import React from 'react';
import { SearchProduct } from "../atoms/SearchProduct";
import SortBy from "../atoms/SortBy";

const Filters = ({filtro, setFiltro, ordenar, setOrdenar }) => {
  return <div className="flex flex-row justify-between w-full items-center px-3 ">
  <SearchProduct filtro={filtro} setFiltro={setFiltro} />
  <SortBy ordenar={ordenar} setOrdenar={setOrdenar} />
</div>;
};

export default Filters;
