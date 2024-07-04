import { SharedConfig } from '@repo/tailwind-config/tailwind.config.ts';

const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  ...SharedConfig,
};

export default config;
