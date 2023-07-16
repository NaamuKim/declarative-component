import useQueryFn from '@/module/react-query';
import { BannerData } from '@/api/types/banner';
import { BANNER_API_URL } from '@/api/queryKeys/banner';

const Banner = () => {
  const { data } = useQueryFn<BannerData>([BANNER_API_URL]);
  return (
    <div>
      {(data as BannerData).map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default Banner;
