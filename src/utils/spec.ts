import MonthDiff from './differenceBetweenMonths';

test('should return the correct difference between dates', () => {
  const dateFrom = new Date(2020, 1);
  const dateTo = new Date(2020, 8);
  const result = MonthDiff(dateFrom, dateTo);
  expect(result).toBe(7);
});

test('should return the correct difference between dates with different years', () => {
  const dateFrom = new Date(2020, 1);
  const dateTo = new Date(2022, 8);
  const result = MonthDiff(dateFrom, dateTo);
  expect(result).toBe(31);
});
