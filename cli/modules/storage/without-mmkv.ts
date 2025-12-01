// Simple storage fallback (no MMKV)
export const storage = {
  getItem: (name: string) => {
    return null;
  },
  setItem: (name: string, value: string) => {
    // No-op
  },
  removeItem: (name: string) => {
    // No-op
  },
};
