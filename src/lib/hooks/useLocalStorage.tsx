interface UseLocalStorageState<T> {
  setValue: (value: T) => void;
  getValue: () => T;
  clearValue: () => void;
  clearAll: VoidFunction;
}

const useLocalStorage = <T,>(key: string): UseLocalStorageState<T> => {
  const setValue = (value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getValue = (): T => {
    const value = localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  };

  const clearValue = () => {
    localStorage.removeItem(key);
  };

  const clearAll = () => {
    localStorage.clear();
  };

  return {
    getValue,
    setValue,
    clearValue,
    clearAll,
  };
};

export default useLocalStorage;
