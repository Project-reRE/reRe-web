export const ColorMap = {
  'primary-orange-60': '#DB7647',
  'primary-green-60': '#79A56F',
  'secondary-olive-50': '#93B745',
  'secondary-cyan-40': '#45686C',
  'tertiary-navy-50': '#47628F',
  'background-gray-10': '#141414',
} as const;

type ColorKeysType = {
  [K in keyof typeof ColorMap]: K;
};

function createColorKeys<T extends object>(obj: T): { [K in keyof T]: K } {
  const result = {} as { [K in keyof T]: K };
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = key;
    }
  }
  return result;
}

export const Color: ColorKeysType = createColorKeys(ColorMap);
