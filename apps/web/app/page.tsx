import TopBannerSlider from '@repo/ui/topBannerSlider';

export default function Home() {
  return (
    <div>
      <TopBannerSlider items={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]} />
    </div>
  );
}
