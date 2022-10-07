export const getMinutesDiffIfLessThanHourAgo = (nowDate: Date, testDate: Date) => {
  if (isToday(nowDate, testDate)) {
    const minutesDiff = Math.floor((nowDate.getTime() - testDate.getTime()) / (1000 * 60));

    if (!minutesDiff) return 1;

    if (minutesDiff < 60) return minutesDiff;
  }

  return 0;
};

export const getHoursDiffIfToday = (nowDate: Date, testDate: Date) => {
  if (isToday(nowDate, testDate)) {
    return Math.floor((nowDate.getTime() - testDate.getTime()) / (1000 * 60 * 60));
  }

  return 0;
};

export const isToday = (nowDate: Date, testDate: Date) => {
  return (
    nowDate.getDate() === testDate.getDate() &&
    nowDate.getMonth() === testDate.getMonth() &&
    nowDate.getFullYear() === testDate.getFullYear()
  );
};

export const isYesterday = (nowDate: Date, testDate: Date) => {
  return (
    nowDate.getDate() - 1 === testDate.getDate() &&
    nowDate.getMonth() === testDate.getMonth() &&
    nowDate.getFullYear() === testDate.getFullYear()
  );
};
