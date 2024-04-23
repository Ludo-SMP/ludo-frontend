export const dateFormatter = (date: string) => {
  const [year, month, day] = date.split('-');
  return year.slice(2) + '.' + month + '.' + day.slice(0, 2);
};

export const getDday = (endDate: string) => {
  const diff = new Date(endDate).getTime() - new Date().getTime();
  const dDay = Math.floor(diff / (60 * 60 * 24 * 1000));
  return dDay >= 0 ? dDay : 0;
};

export const getPeriod = (startDate: string, endDate: string) => {
  const start = dateFormatter(startDate);
  const end = dateFormatter(endDate);
  return start + '~' + end;
};

export const isEdited = (createdDate: string, updatedDate: string) => {
  const updatedDateTime = new Date(updatedDate).getTime();
  const createdDateTime = new Date(createdDate).getTime();

  return updatedDateTime - createdDateTime > 0;
};

/**
 * @description Date | [Date Date] => locale ko 기준 ISOString으로 변환한다.
 */
export const parseISOString = (date: Date | [Date, Date]) => {
  let pick;
  if (date instanceof Date) pick = date;
  // 시작과 끝 날짜가 있는 경우, 끝 날짜를 선택한다.
  else pick = date[1];

  // 한국의 offset을 추가한다.
  let offset = pick.getTimezoneOffset() * 60000;
  let dateOffset = new Date(pick.getTime() - offset);
  return dateOffset.toISOString();
};

export const getTimeInt = (uuidStr: string) => {
  var uuidArr = uuidStr.split('-');
  const offset = 2;
  let timeArr = [uuidArr[2 + offset].substring(1), uuidArr[1 + offset], uuidArr[0 + offset]].join('');
  return parseInt(timeArr, 16);
};

export const getMillisec = (uuidStr: string) => {
  let intTime = getTimeInt(uuidStr) - 122192928000000000;
  let intMillisec = Math.floor(intTime / 10000);
  return intMillisec;
};
