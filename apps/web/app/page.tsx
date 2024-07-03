// import http from '@repo/services/http';
// import OpenBannerResponseDto from '@repo/services/types/banner';
import TopBannerSlider from '@repo/ui/topBannerSlider';

export default async function Home() {
  // const res = await http.get('/open-banners');

  return (
    <div>
      <TopBannerSlider items={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]} />
    </div>
  );
}
