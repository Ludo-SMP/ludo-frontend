export const dateFormatter = (date: string) => {
  const [year, month, day] = date.split('-');
  return year.slice(2) + '.' + month + '.' + day.slice(0, 2);
};

export const getDday = (startDate: string, endDate: string) => {
  const diff = new Date(endDate).getTime() - new Date(startDate).getTime();
  return diff / (60 * 60 * 24 * 1000);
};

export const getPeriod = (startDate: string, endDate: string) => {
  const start = dateFormatter(startDate);
  const end = dateFormatter(endDate);
  return start + '~' + end;
};
