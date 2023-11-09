import React from "react";
import { usePaginatedResults } from "../hooks/usePaginatedResults";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export default function PaginateResultsHooked() {
  const {
    paginatedData,
    nextPage,
    prevPage,
    changePageSize,
    changePageOffset,
    setAllData,
    pageSize,
    pageOffset,
  } = usePaginatedResults({
    data,
    initialPageSize: 10,
    initialPageOffset: 0,
  });

  return (
    <div>
      <p>All Data:</p>
      {data}
      <br />
      <p>Page Data:</p>
      {paginatedData.toString()}
      <br />
      <button onClick={() => nextPage()}>
        next page
      </button>
      <button
        onClick={() => prevPage()}
      >
        prev page
      </button>
      {/* this isn't good practice */}
      page size:
      <input onChange={changePageSize} value={pageSize} />
      page offset:
      <input onChange={changePageOffset} value={pageOffset} />
    </div>
  );
}
