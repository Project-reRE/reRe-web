import React from 'react';

import { getOpenBanner } from '@repo/services';

import TopBannerSlider from 'components/TopBannerSlider';

const TopBanner = async () => {
  const openBannerData = await getOpenBanner();

  return <>{openBannerData && <TopBannerSlider items={openBannerData?.results} />}</>;
};

export default TopBanner;
