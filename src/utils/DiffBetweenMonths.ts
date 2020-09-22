function MonthDiff(dateFrom: Date, dateTo: Date) {
  console.log(dateFrom);
  console.log(dateTo);
  return (
    dateTo.getMonth() -
    dateFrom.getMonth() +
    12 * (dateTo.getFullYear() - dateFrom.getFullYear())
  );
}

export default MonthDiff;
