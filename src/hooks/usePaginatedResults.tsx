import React from "react";

export interface usePaginatedResultsProps<T> {
  data: T[];
  initialPageSize: number;
  initialPageOffset: number;
}

export interface hookResults<T> {
  paginatedData: T[];
  nextPage: () => void;
  prevPage: () => void;
  changePageSize: (value: React.ChangeEvent<HTMLInputElement>) => void;
  changePageOffset: (value: React.ChangeEvent<HTMLInputElement>) => void;
  setAllData: (data: T[]) => void;
  pageSize: number;
  pageOffset: number;
}

export const usePaginatedResults = <T,>({
  data,
  initialPageSize,
  initialPageOffset,
}: usePaginatedResultsProps<T>): hookResults<T> => {
  const [allData, setAllData] = React.useState(data);
  const [pageSize, setPageSize] = React.useState(initialPageSize);
  const [pageOffset, setPageOffset] = React.useState(initialPageOffset);
  const [pageData, setPageData] = React.useState<T[]>([]);

  React.useEffect(() => {
      const startIndex = pageSize * pageOffset;
      const endIndex: number = Math.min((pageSize) + (startIndex), allData.length);
      setPageData(allData.slice(startIndex,endIndex))
  }, [pageSize, pageOffset, setPageData, allData])

  const changePageSize = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPageSize((value as unknown as number) * 1);
  };

  const changePageOffset = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPageOffset((value as unknown as number) * 1);
  };

  return {
    paginatedData: pageData,
    nextPage: () => {setPageOffset(prev => prev + 1)},
    prevPage: () => {setPageOffset(prev => prev > 0 ? prev - 1 : 0)},
    changePageSize,
    changePageOffset,
    setAllData: (data) => setAllData(data),
    pageSize,
    pageOffset,
  };
};
