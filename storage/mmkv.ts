// MMKV is not available in Expo Go. Use a safe, runtime-checked import
// and fall back to an in-memory async storage to keep the app running.

type StorageLike = {
  setItem: (key: string, value: string) => Promise<void> | void;
  getItem: (key: string) => Promise<string | null> | string | null;
  removeItem: (key: string) => Promise<void> | void;
};

let mmkvStorage: StorageLike;

try {
  const { MMKV } = require("react-native-mmkv");
  const mmkv = new MMKV();

  mmkvStorage = {
    async setItem(key: string, value: string) {
      mmkv.set(key, value);
    },
    async getItem(key: string) {
      const v = mmkv.getString(key);
      return v ?? null;
    },
    async removeItem(key: string) {
      mmkv.delete(key);
    },
  } as StorageLike;
} catch {
  const memory = new Map<string, string>();

  mmkvStorage = {
    async setItem(key: string, value: string) {
      memory.set(key, value);
    },
    async getItem(key: string) {
      return memory.has(key) ? memory.get(key)! : null;
    },
    async removeItem(key: string) {
      memory.delete(key);
    },
  } as StorageLike;
}

export { mmkvStorage };
