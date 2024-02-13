import { useRef, useCallback, useEffect } from 'react';

const useIntersectionObservable = (
  onIntersection: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void,
  options?: IntersectionObserverInit,
) => {
  const ref = useRef<HTMLElement>(null);

  const callback = useCallback(
    (entries: IntersectionObserverEntry[], _observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry);
          onIntersection(entry, _observer);
        }
      });
    },
    [onIntersection],
  );

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options, callback]);

  return ref;
};

export default useIntersectionObservable;
