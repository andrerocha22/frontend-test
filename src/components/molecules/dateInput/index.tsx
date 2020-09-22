import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MonthDiff from '../../../utils/DiffBetweenMonths';
import { ButtonSelection } from '../../atoms/button';
import {
  DateSelectionPrimaryText,
  DateSelectionSecondaryText,
} from '../../atoms/typography';

interface DateInputProps {
  iconSrcLeft: string;
  iconSrcRight: string;
  diffCallback: (df: number) => void;
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

const DateInputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border: 1px solid #e1e8ed;
  border-radius: 4px;
`;

const DateDisplay = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
`;

const DateInput: React.FunctionComponent<DateInputProps> = ({
  iconSrcLeft,
  iconSrcRight,
  diffCallback,
}) => {
  const [selectedMonth, setSelectedMonth] = useState<number>(
    months.indexOf(currentMonth) + 1
  );
  const [selectedYear, setSelectedYear] = useState<number>(currentYear);
  const [minMonth, setMinMonth] = useState<string>('');

  useEffect(() => {
    setMinMonth(months[months.indexOf(currentMonth) + 1]);
  }, []);

  const handleForward = () => {
    if (selectedMonth === months.indexOf('December')) {
      const nextYear = selectedYear + 1;
      setSelectedYear(nextYear);

      setSelectedMonth(months.indexOf('January'));
    } else {
      const newMonthIndex = selectedMonth + 1;

      setSelectedMonth(newMonthIndex);
    }

    const diff = MonthDiff(
      new Date(currentYear, months.indexOf(currentMonth)),
      new Date(selectedYear, selectedMonth + 1)
    );
    diffCallback(diff);
  };

  const handleBackward = () => {
    if (selectedMonth === months.indexOf('January')) {
      const previousYear = selectedYear - 1;
      setSelectedYear(previousYear);

      setSelectedMonth(months.indexOf('December'));
    } else {
      const previousMonthIndex = selectedMonth - 1;

      setSelectedMonth(previousMonthIndex);
    }

    const diff = MonthDiff(
      new Date(currentYear, months.indexOf(currentMonth)),
      new Date(selectedYear, selectedMonth - 1)
    );
    diffCallback(diff);
  };

  const keyHandler = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowRight') {
      handleForward();
    }
    if (e.key === 'ArrowLeft') {
      handleBackward();
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
