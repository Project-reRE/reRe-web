import { SharedConfig, ConfigType } from '@repo/tailwind-config/tailwind.config.ts';

const config: Pick<ConfigType, 'content' | 'presets'> = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  presets: [SharedConfig],
};

export default config;
