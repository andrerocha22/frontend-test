import MonthDiff from '../utils/differenceBetweenMonths';

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

export const handleButtonChangeDateForward = (
  selectedMonth: number,
  selectedYear: number,
  currentYear: number,
  currentMonth: string,
  setSelectedYear: React.Dispatch<React.SetStateAction<number>>,
  setSelectedMonth: React.Dispatch<React.SetStateAction<number>>,
  differenceDatesCallback: (df: number, mth: string, yr: string) => void
): any => {
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

export const handleButtonChangeDateBackward = (
  selectedMonth: number,
  selectedYear: number,
  currentYear: number,
  currentMonth: string,
  setSelectedYear: React.Dispatch<React.SetStateAction<number>>,
  setSelectedMonth: React.Dispatch<React.SetStateAction<number>>,
  differenceDatesCallback: (df: number, mth: string, yr: string) => void
): any => {
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
