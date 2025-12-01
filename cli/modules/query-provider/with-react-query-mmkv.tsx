import { ReactNode } from 'react';
import { onlineManager } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { queryClient } from '@/lib/query-client';
import { storage } from '@/lib/mmkvStorage';

interface QueryProviderProps {
  children: ReactNode;
}

const persister = createSyncStoragePersister({
  storage: {
    getItem: (key: string) => {
      const value = storage.getString(key);
      return value ?? null;
    },
    setItem: (key: string, value: string) => {
      storage.set(key, value);
    },
    removeItem: (key: string) => {
      storage.remove(key);
    },
  },
});

export const QueryProvider = ({ children }: QueryProviderProps) => {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister,
      }}
      onSuccess={async () => {
        if (onlineManager.isOnline()) {
          await queryClient.resumePausedMutations();
          await queryClient.invalidateQueries();
        }
      }}
    >
      {children}
    </PersistQueryClientProvider>
  );
};
