import { SharedConfig, ConfigType } from '@repo/tailwind-config/tailwind.config.ts';

const config: Pick<ConfigType, 'content' | 'presets'> = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/**/*{.js,.ts,.jsx,.tsx}',
  ],
  presets: [SharedConfig],
};

export default config;
