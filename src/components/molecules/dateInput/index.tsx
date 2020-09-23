import React, { useState, useEffect } from 'react';
import MonthDiff from '../../../utils/differenceBetweenMonths';
import { ButtonSelection } from '../../atoms/button';
import {
  DateSelectionPrimaryText,
  DateSelectionSecondaryText,
} from '../../atoms/typography';

import { DateInputContainer, DateDisplay } from './styles';

interface DateInputProps {
  iconSrcLeft: string;
  iconSrcRight: string;
  differenceDatesCallback: (df: number, mth: string, yr: string) => void;
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });
const currentYear = new Date().getFullYear();

const DateInput: React.FunctionComponent<DateInputProps> = ({
  iconSrcLeft,
  iconSrcRight,
  differenceDatesCallback,
}) => {
  const [selectedMonth, setSelectedMonth] = useState<number>(
    months.indexOf(currentMonth) + 1
  );
  const [selectedYear, setSelectedYear] = useState<number>(currentYear);
  const [minMonth, setMinMonth] = useState<string>('');

  useEffect(() => {
    setMinMonth(months[months.indexOf(currentMonth) + 1]);
    differenceDatesCallback(
      1,
      months[selectedMonth],
      selectedYear.toString(10)
    );
  }, []);

  const handleForward = () => {
    if (selectedMonth === months.indexOf('December')) {
      const nextYear = selectedYear + 1;
      setSelectedYear(nextYear);

      setSelectedMonth(months.indexOf('January'));

      const diff = MonthDiff(
        new Date(currentYear, months.indexOf(currentMonth)),
        new Date(selectedYear, selectedMonth + 1)
      );
      differenceDatesCallback(diff, months[0], nextYear.toString(10));
    } else {
      const newMonthIndex = selectedMonth + 1;

      setSelectedMonth(newMonthIndex);

      const diff = MonthDiff(
        new Date(currentYear, months.indexOf(currentMonth)),
        new Date(selectedYear, selectedMonth + 1)
      );

      differenceDatesCallback(
        diff,
        months[selectedMonth + 1],
        selectedYear.toString(10)
      );
    }
  };

  const handleBackward = () => {
    if (selectedMonth === months.indexOf('January')) {
      const previousYear = selectedYear - 1;
      setSelectedYear(previousYear);

      setSelectedMonth(months.indexOf('December'));

      const diff = MonthDiff(
        new Date(currentYear, months.indexOf(currentMonth)),
        new Date(selectedYear, selectedMonth + 1)
      );
      differenceDatesCallback(diff, months[11], previousYear.toString(10));
    } else {
      const previousMonthIndex = selectedMonth - 1;

      setSelectedMonth(previousMonthIndex);

      const diff = MonthDiff(
        new Date(currentYear, months.indexOf(currentMonth)),
        new Date(selectedYear, selectedMonth - 1)
      );

      differenceDatesCallback(
        diff,
        months[selectedMonth - 1],
        selectedYear.toString(10)
      );
    }
  };

  const keyHandler = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowRight') {
      handleForward();
    }
    if (e.key === 'ArrowLeft') {
      selectedYear === currentYear && months[selectedMonth] === minMonth
        ? null
        : handleBackward();
    }
  };

  return (
    <DateInputContainer data-test="component-date-input">
      <ButtonSelection
        handleClick={handleBackward}
        onKeyUp={keyHandler}
        backgroundColor="#E1E8ED"
        disabled={
          selectedYear === currentYear && months[selectedMonth] === minMonth
            ? true
            : false
        }
      >
        <img src={iconSrcLeft} />
      </ButtonSelection>
      <DateDisplay data-test="component-date-display">
        <DateSelectionPrimaryText
          className="month"
          data-test="component-month-text"
        >
          {months[selectedMonth]}
        </DateSelectionPrimaryText>
        <DateSelectionSecondaryText
          className="year"
          data-test="component-year-text"
        >
          {selectedYear}
        </DateSelectionSecondaryText>
      </DateDisplay>
      <ButtonSelection
        onKeyUp={keyHandler}
        handleClick={handleForward}
        backgroundColor="#E1E8ED"
      >
        <img src={iconSrcRight} />
      </ButtonSelection>
    </DateInputContainer>
  );
};

export default DateInput;
