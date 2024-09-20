export function removeUndefined(obj: object) {
  return Object.fromEntries(Object.entries(obj).filter(([key, value]) => value !== undefined));
}

export interface GetListType<T> {
  totalRecords: number;
  results: T[];
}
