import React from 'react';
import ReactPaginate from "react-paginate";


const Paginación = ({productosOrdenados, productsPerPage, setPage}) => {
  return <>
    <ReactPaginate
        previousLabel={'anterior'}
        nextLabel={'siguiente'}
        pageCount={Math.ceil(productosOrdenados.length / productsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={(e) => setPage(e.selected)}

        containerClassName={"border  items-center flex flex-row rounded  p-2"}
        pageClassName={"border rounded p-2 m-2"}
        activeClassName={"bg-blue-500 text-white rounded p-2"}
        previousLinkClassName = {"bg-zinc-800 rounded p-2 text-white"}
        nextLinkClassName = {"bg-zinc-800 rounded p-2 text-white"}
      />
  </>;
};

export default Paginación;
