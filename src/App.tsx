import './App.css';
import Fetcher from '@/component/Fetcher';
import { useRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Banner from '@/component/screen/Banner';
import { BANNER_API_URL } from '@/api/queryKeys/banner';

function queryErrorHandler(error: unknown): void {
  const title =
    error instanceof Error ? error.message : 'error connecting to server';
  alert(title);
}

export function generateQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        onError: queryErrorHandler,
        staleTime: 1000 * 60 * 10, // 10분
        cacheTime: 1000 * 60 * 15, // 15분 (staleTime 보다 길게)
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
      mutations: {
        onError: queryErrorHandler,
      },
    },
  });
}

export const queryClient = generateQueryClient();

function App() {
  const queryClientRef = useRef<QueryClient>();
  if (queryClientRef.current !== null) {
    // current 값이 null 값일 때 변경이 발생하더라도 재렌더링이 일어나지 않기 위해 useRef 사용
    queryClientRef.current = new QueryClient();
  }
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Fetcher queryKeys={[BANNER_API_URL]}>
          <Banner />
        </Fetcher>
      </QueryClientProvider>
    </>
  );
}

export default App;
