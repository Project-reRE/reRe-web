export const ColorMap = {
  ColorPrimary: '#6200EE',
  ColorPrimaryVariant: '#3700B3',
  ColorSecondary: '#03DAC5',
  ColorSecondaryVariant: '#018786',
  Background: '#141414',
  Kakao: '#FEE500',
  White: '#FFFFFF',
  Black: '#000000',
  Gray10: '#141414',
  Gray20: '#262626',
  Gray30: '#454545',
  Gray40: '#5E5E5E',
  Gray50: '#787878',
  Gray60: '#919191',
  Gray70: '#B3B3B3',
  Gray80: '#D1D1D1',

  Orange10: '#1E0D06',
  Orange20: '#49210E',
  Orange30: '#733417',
  Orange40: '#9E471F',
  Orange50: '#C85A27',
  Orange60: '#DB7647',
  Orange70: '#E39672',
  Orange80: '#ECB69D',
  Orange90: '#F4D6C8',
  Orange100: '#FCF5F2',

  Green10: '#090D08',
  Green20: '#1F2C1B',
  Green30: '#344B2F',
  Green40: '#4A6B43',
  Green50: '#608A56',
  Green60: '#79A56F',
  Green70: '#96B88E',
  Green80: '#B3CCAD',
  Green90: '#D0E0CD',
  Green100: '#EDF3EC',

  Olive10: '#1B210D',
  Olive20: '#39461B',
  Olive30: '#566B29',
  Olive40: '#749037',
  Olive50: '#93B745',
  Olive60: '#A8C667',
  Olive70: '#BDD48C',
  Olive80: '#D2E2B1',
  Olive90: '#E8F0D6',
  Olive100: '#FDFEFB',

  Cyan10: '#0A0F10',
  Cyan20: '#1E2D2F',
  Cyan30: '#324B4E',
  Cyan40: '#45686C',
  Cyan50: '#59878C',
  Cyan60: '#73A0A6',
  Cyan70: '#92B5B9',
  Cyan80: '#B1CACD',
  Cyan90: '#D0DFE1',
  Cyan100: '#EFF4F5',

  Navy10: '#030507',
  Navy20: '#141C29',
  Navy30: '#25334A',
  Navy40: '#364B6D',
  Navy50: '#47628F',
  Navy60: '#5C7BAD',
  Navy70: '#7E96BE',
  Navy80: '#A0B2CF',
  Navy90: '#C2CDE0',
  Navy100: '#E4E9F1',
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
