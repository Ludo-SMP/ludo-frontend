export const dateFormatter = (date) => {
  const [year, month, day] = date.split('-');
  return month + '.' + day;
};
