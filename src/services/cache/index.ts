import { CacheKeys } from '@/src/types/cache/keys';
import Storage from '@react-native-async-storage/async-storage';

export const setCache = async (key: CacheKeys, value: string) => {
  return Storage.setItem(key, value);
};

export const getCache = async (key: string): Promise<string | null> => {
  return Storage.getItem(key);
};
