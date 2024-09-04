// 객체를 [{ key: value }] 배열로 변환하는 함수
export const convertKeyValueObjectArray = (ageObject: any): { [key: string]: any }[] => {
  return Object.entries(ageObject).map(([key, value]) => ({ [key]: value }));
};

export const convertAgeTypeToKeyValueObjectArray = (ageObject: any): { [key: string]: any }[] => {
  return Object.entries(ageObject).map(([key, value]) => ({ dataKey: key, numParticipation: value }));
};
