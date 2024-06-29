import type { Config } from 'tailwindcss';
import { ColorMap } from './theme';

export const SharedConfig: Omit<Config, 'content'> = {
  theme: {
    extend: {
      colors: {
        ...ColorMap,
      },
    },
  },
  plugins: [],
};

export type ConfigType = Config;
