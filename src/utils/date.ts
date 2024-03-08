export const dateFormatter = (date: string) => {
  const [year, month, day] = date.split('-');
  return year.slice(2) + '.' + month + '.' + day.slice(0, 2);
};

export const getDday = (endDate: string) => {
  const diff = new Date(endDate).getTime() - new Date().getTime();
  const dDay = diff / (60 * 60 * 24 * 1000);
  return dDay >= 0 ? dDay : 0;
};

export const getPeriod = (startDate: string, endDate: string) => {
  const start = dateFormatter(startDate);
  const end = dateFormatter(endDate);
  return start + '~' + end;
};

export const isCompleted = (endDate: string) => {
  return new Date(endDate).getTime() - new Date().getTime() < 0;
};

export const isNotStart = (startDate: string) => {
  return new Date(startDate).getTime() - new Date().getTime() > 0;
};
