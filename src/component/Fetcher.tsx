import React from 'react';
import { useQueryFn } from '@/module/react-query';
import { BannerData } from '@/api/types/banner';

type Props = {
  queryKeys: [string, ...object[]];
  children: React.ReactElement[] | React.ReactElement;
};

function Fetcher({ queryKeys, children }: Props) {
  const { isLoading } = useQueryFn<BannerData>(queryKeys, {
    useErrorBoundary: true,
  });

  if (isLoading) return <div>loading...</div>;

  return <div>{children}</div>;
}

export default Fetcher;
