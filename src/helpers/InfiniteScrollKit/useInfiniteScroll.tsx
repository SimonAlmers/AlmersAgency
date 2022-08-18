import { useCallback, useRef } from "react";

const useInfititeScroll = ({
  fetchNext,
  isLoading,
  hasMore,
}: {
  fetchNext: () => void;
  isLoading: boolean;
  hasMore: boolean;
}) => {
  const observer = useRef<IntersectionObserver>();
  const lastItemRef = useCallback(
    (node: Element) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          if (hasMore) fetchNext();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  return lastItemRef;
};

export default useInfititeScroll;
