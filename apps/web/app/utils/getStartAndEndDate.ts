import { format, lastDayOfMonth } from 'date-fns';

export function getStartAndEndDate(year?: number, month?: number) {
  const today = new Date();

  // undefined이면 현재 연도와 월을 사용, month는 0부터 시작하므로 +1을 한 후 1을 다시 뺌
  const startDate = new Date(year ?? today.getFullYear(), (month ?? today.getMonth() + 1) - 1, 1);
  const endDate = lastDayOfMonth(startDate); // 해당 월의 마지막 날

  console.log(year, month, startDate); // year, month, startDate를 출력

  // yyyy-MM-dd 형식으로 변환
  const formattedStartDate = format(startDate, 'yyyy-MM-dd');
  const formattedEndDate = format(endDate, 'yyyy-MM-dd');

  return {
    startDate: formattedStartDate,
    endDate: formattedEndDate,
  };
}

// 테스트 실행
const { startDate, endDate } = getStartAndEndDate();
console.log(`Start Date: ${startDate}, End Date: ${endDate}`);
