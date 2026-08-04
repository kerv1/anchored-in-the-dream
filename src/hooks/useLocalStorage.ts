import { useCallback, useEffect, useRef, useState } from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T | ((prev: T) => T)) => void] {
  const initialRef = useRef(initialValue);

  const readValue = useCallback((): T => {
    if (typeof window === "undefined") return initialRef.current;
    try {
      const item = window.localStorage.getItem(key);
      return item != null ? (JSON.parse(item) as T) : initialRef.current;
    } catch {
      return initialRef.current;
    }
  }, [key]);

  const [storedValue, setStoredValue] = useState<T>(readValue);

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStoredValue((prev) => {
        const next = value instanceof Function ? value(prev) : value;
        try {
          window.localStorage.setItem(key, JSON.stringify(next));
        } catch {
          // Ignore quota / private mode errors
        }
        return next;
      });
    },
    [key],
  );

  useEffect(() => {
    setStoredValue(readValue());
    const onStorage = (event: StorageEvent) => {
      if (event.key === key) {
        setStoredValue(readValue());
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [key, readValue]);

  return [storedValue, setValue];
}
