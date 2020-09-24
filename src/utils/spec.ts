import MonthDiff from './differenceBetweenMonths';
import {
  handleButtonChangeDateBackward,
  handleButtonChangeDateForward,
} from './Helpers';

describe('test MonthDifference function', () => {
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
});

describe('test Helper handleButtonChangeDateForward function', () => {
  test('should return the correct difference between dates with different years', () => {
    const dispatch = jest.fn();
    handleButtonChangeDateBackward(
      0,
      2020,
      2019,
      'June',
      dispatch,
      dispatch,
      dispatch
    );
    expect(dispatch).toBeCalledTimes(3);
  });
});

describe('test Helper handleButtonChangeDateBackward function', () => {
  test('should return the correct difference between dates with different years', () => {
    const dispatch = jest.fn();
    handleButtonChangeDateForward(
      11,
      2019,
      2019,
      'June',
      dispatch,
      dispatch,
      dispatch
    );
    expect(dispatch).toBeCalledTimes(3);
  });
});
