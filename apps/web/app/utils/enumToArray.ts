export type enumToArrayType = { label: string; value: string | number }[];

export const enumToArray = <T extends Record<string, string | number>>(enumObj: T): enumToArrayType => {
  return Object.entries(enumObj).map(([label, value]) => ({
    label,
    value,
  }));
};
