import { provide, inject } from 'vue';

/**
 * Create a context with a default value
 * @param defaultValue The default value that will be returned if the context is not set
 * @returns [set, get, key] The setter, getter and key for the context, the getter returns the default value if the context is not set
 */
export function createContext<T>(defaultValue: T): readonly [(value: T) => void, () => T, symbol]{
  const key = Symbol();
  
  const set = (value: T) => {
    provide(key, value);
  };
  
  const get = () => {
    return inject(key, defaultValue);
  };
  
  return [set, get, key] as const;
}