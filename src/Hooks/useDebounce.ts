import { useEffect, useState } from 'react';

const DEFAULT_DELAY = 500;

const useDebounce = <T>(value: T, delay: number = DEFAULT_DELAY) => {
  const [debouncedValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
