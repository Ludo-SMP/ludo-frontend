export const dateFormatter = (date: string) => {
  const dateElements = date.split('-');
  const [month, day] = dateElements.slice(1);
  return month + '.' + day;
};
