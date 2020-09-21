import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MonthDiff from '../../../utils/DiffBetweenMonths';
import { ButtonSelection } from '../../atoms/button';
import {
  DateSelectionPrimaryText,
  DateSelectionSecondaryText,
  LabelText,
} from '../../atoms/typography';

interface DateInputProps {
  label: string;
  iconSrc: string;
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

const DateInput = ({ label, iconSrc }: DateInputProps) => {
  const [selectedMonth, setSelectedMonth] = useState<number>(
    months.indexOf(currentMonth) + 1
  );
  const [selectedYear, setSelectedYear] = useState<number>(currentYear);
  const [minMonth, setMinMonth] = useState<string>('');

  useEffect(() => {
    setMinMonth(months[months.indexOf(currentMonth) + 1]);
  }, []);

  const handleForward = () => {
    // const diff = MonthDiff(
    //   new Date(currentYear, months.indexOf(currentMonth)),
    //   new Date(selectedYear, selectedMonth)
    // );

    if (selectedMonth === months.indexOf('December')) {
      const nextYear = selectedYear + 1;
      setSelectedYear(nextYear);

      // rootDispatcher.updateDeposit(
      //   monthDiff(nextYear, months.indexOf('January'))
      // );

      setSelectedMonth(months.indexOf('January'));
    } else {
      const newMonthIndex = selectedMonth + 1;

      setSelectedMonth(newMonthIndex);
    }
  };

  const handleBackward = () => {
    if (selectedMonth === months.indexOf('January')) {
      const previousYear = selectedYear - 1;
      setSelectedYear(previousYear);

      // rootDispatcher.updateDeposit(
      //   monthDiff(previousYear, months.indexOf('December'))
      // );

      setSelectedMonth(months.indexOf('December'));
    } else {
      const previousMonthIndex = selectedMonth - 1;

      setSelectedMonth(previousMonthIndex);
    }
  };

  // const keyHandler = (e) => {
  //   if (e.key === 'ArrowRight') {
  //     handleForward();
  //   }
  //   if (e.key === 'ArrowLeft') {
  //     year === currentYear && month === minMonth ? null : handleBackward();
  //   }
  // };

  return (
    <>
      <DateInputContainer data-test="component-date-input">
        <LabelText>{label}</LabelText>
        <ButtonSelection
          handleClick={handleBackward}
          backgroundColor="#E1E8ED"
          disabled={
            selectedYear === currentYear && months[selectedMonth] === minMonth
              ? true
              : false
          }
        >
          <img src={iconSrc} />
        </ButtonSelection>
        <DateDisplay className="dateDisplay">
          <DateSelectionPrimaryText className="month">
            {months[selectedMonth]}
          </DateSelectionPrimaryText>
          <DateSelectionSecondaryText className="year">
            {selectedYear}
          </DateSelectionSecondaryText>
        </DateDisplay>
        <ButtonSelection handleClick={handleForward} backgroundColor="#E1E8ED">
          <img src={iconSrc} />
        </ButtonSelection>
      </DateInputContainer>
    </>
  );
};

export default DateInput;
