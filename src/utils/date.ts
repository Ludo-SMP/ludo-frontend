export const dateFormatter = (date: string) => {
  const [year, month, day] = date.split('-');
  return year.slice(2) + '.' + month + '.' + day.slice(2);
};

export const getdDay = (startDate: string, endDate: string) => {};
