import { useQuery, UseQueryOptions } from 'react-query';

function fetcher(url: string) {
  return fetch(url).then((res) => res.json());
}

export const useQueryFn = <T>(
  queryKeys: [string, ...object[]],
  options: UseQueryOptions<T & any> & { customQueryKeys?: any } = {}
) =>
  useQuery<T>(queryKeys, () => fetcher(queryKeys[0]), {
    ...options,
  });

export default useQueryFn;
