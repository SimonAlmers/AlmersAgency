import React from "react";
import useInfititeScroll from "./useInfiniteScroll";

const InfiniteScrollList = ({
  children,
  fetchNext,
  hasMore,
  isLoading,
}: {
  children: JSX.Element | JSX.Element[];
  fetchNext: () => void;
  hasMore: boolean;
  isLoading: boolean;
}): JSX.Element => {
  const lastItemRef = useInfititeScroll({ fetchNext, hasMore, isLoading });
  return (
    <>
      {children}
      <div ref={lastItemRef} />
      {hasMore && (
        <>
          <span>Skeletono</span>
        </>
      )}
    </>
  );
};

export default InfiniteScrollList;
