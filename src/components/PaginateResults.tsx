import React from "react";

export default function PaginateResults() {
  const [allData, setAllData] = React.useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]);
  const [pageSize, setPageSize] = React.useState<number>(10);
  const [pageOffset, setPageOffset] = React.useState<number>(0);
  const [pageData, setPageData] = React.useState<number[]>([]);

  React.useEffect(() => {
    const startIndex: number = pageSize * pageOffset;
    const endIndex: number = Math.min(pageSize + startIndex, allData.length);

    setPageData(allData.slice(startIndex, endIndex));
  }, [pageSize, pageOffset, setPageData, allData]);

  const changePageSize = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    console.log("size", value);
    setPageSize((value as unknown as number) * 1);
  };

  const changePageOffset = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    console.log("offset", value);
    setPageOffset((value as unknown as number) * 1);
  };

  return (
    <div>
      <p>All Data:</p>
      {allData.toString()}
      <br />
      <p>Page Data:</p>
      {pageData.toString()}
      <br />
      <button onClick={() => setPageOffset((prev) => prev + 1)}>
        next page
      </button>
      <button
        onClick={() => setPageOffset((prev) => (prev > 0 ? prev - 1 : 0))}
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
