import React, { useState, useEffect } from 'react';
import { ButtonSelection } from '../../atoms/button';
import {
  DateSelectionPrimaryText,
  DateSelectionSecondaryText,
} from '../../atoms/typography';
import {
  handleButtonChangeDateBackward,
  handleButtonChangeDateForward,
} from '../../../utils/Helpers';

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

  //Set the min month (current+1) and dispatch the callback when start
  useEffect(() => {
    setMinMonth(months[months.indexOf(currentMonth) + 1]);
    differenceDatesCallback(
      1,
      months[selectedMonth],
      selectedYear.toString(10)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const keyboardHandler = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowRight') {
      handleButtonChangeDateForward(
        selectedMonth,
        selectedYear,
        currentYear,
        currentMonth,
        setSelectedYear,
        setSelectedMonth,
        differenceDatesCallback
      );
    }
    if (e.key === 'ArrowLeft') {
      selectedYear === currentYear && months[selectedMonth] === minMonth
        ? null
        : handleButtonChangeDateBackward(
            selectedMonth,
            selectedYear,
            currentYear,
            currentMonth,
            setSelectedYear,
            setSelectedMonth,
            differenceDatesCallback
          );
    }
  };

  return (
    <DateInputContainer data-test="component-date-input">
      <ButtonSelection
        name="left-button"
        handleClick={() =>
          handleButtonChangeDateBackward(
            selectedMonth,
            selectedYear,
            currentYear,
            currentMonth,
            setSelectedYear,
            setSelectedMonth,
            differenceDatesCallback
          )
        }
        onKeyUp={keyboardHandler}
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
        name="right-button"
        onKeyUp={keyboardHandler}
        handleClick={() =>
          handleButtonChangeDateForward(
            selectedMonth,
            selectedYear,
            currentYear,
            currentMonth,
            setSelectedYear,
            setSelectedMonth,
            differenceDatesCallback
          )
        }
        backgroundColor="#E1E8ED"
      >
        <img src={iconSrcRight} />
      </ButtonSelection>
    </DateInputContainer>
  );
};

export default DateInput;
