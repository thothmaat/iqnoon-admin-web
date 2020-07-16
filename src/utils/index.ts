/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 13:46:09
 * @LastEditTime : 2020-01-07 09:45:31
 * @LastEditors  : Please set LastEditors
 */
import qs from 'query-string';
export const createLocationSearch = (query: object) => {
  return qs.stringify(query);
};

export const parseLocationSearch = (search: string) => {
  return qs.parse(search);
};

export const uuid = () => {
  const date2String = Date.now().toString(32);
  const randomString = Math.ceil(Math.random() * 10000).toString(32);
  return `${date2String}_${randomString}`;
};

export const getTime = (timeStamp?: number | string, gap = '-') => {
  const time = timeStamp ? new Date(timeStamp) : new Date(),
    y = time.getFullYear(),
    m = `0${time.getMonth() + 1}`.slice(-2),
    d = `0${time.getDate()}`.slice(-2);
  return `${y + gap + m + gap + d} ${time.toTimeString().substr(0, 8)}`;
};

export const getDate = (time?: number | string) => {
  if (time && !(Number(time) > 0)) {
    // eslint-disable-next-line prefer-const
    let [tDate, tTime] = time.toString().split(' ');
    tDate = tDate.replace(/[^\d]/g, '/');
    time = tTime ? `${tDate} ${tTime}` : `${tDate}`;
  }
  const d = time ? new Date(time) : new Date();
  return {
    Y: d.getFullYear(),
    M: d.getMonth(),
    W: d.getDay(), //周几
    D: d.getDate(),
    h: d.getHours(),
    min: d.getMinutes(),
    s: d.getSeconds(),
    ms: d.getMilliseconds(),
  };
};

export const getDateString = (time?: number | string, gap = '-') => {
  const { Y, M, D } = getDate(time);
  return Y + gap + (M + 1) + gap + D;
};

export const toFixed = (value = 0, len = 2) => {
  return Number(value).toFixed(len);
};

// 将数字保留两位小数，不足的补“.00”,如：123.036
export const to2ZeroDecimal = (x: number | string): string => {
  const value: number = Math.round(parseFloat(`${x}`) * 100) / 100;
  let res = value.toString();
  const arr = res.split('.'); // ['123', '036']
  if (arr.length === 1) {
    res += '.00';
  }
  if (arr.length > 1) {
    if (arr[1].length < 2) {
      res += '0';
    }
  }
  return res;
};

// 将数字以每三位逗号分隔
export const toCommaNumber = (x: number | string): string => {
  return x.toString().replace(/\B(?=(\d{3})+\b)/g, ',');
};

/*
 * 千分位，并且保留两位小数
 */
export const getThousandsData = (dataString: number) => {
  if (dataString !== 0 && !dataString) {
    return '-';
  }
  // 如果数据为带有小数的。则需要小数点第三位小数四舍五入为两位   数据千分位加分号
  const numTextFloat = `${Number(dataString).toFixed(2)}`.replace(
    /\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,
    '$&,'
  );
  return numTextFloat;
};

/*
 * 千分位，不保留两位小数
 */
export const getThousandsDataInt = (dataString: number) => {
  if (dataString !== 0 && !dataString) {
    return '';
  }
  // 如果数据为整数，只需要做千分位加分号处理
  const numTextInt = `${Number(dataString)}`.replace(
    /\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,
    '$&,'
  );
  return numTextInt;
};

export const getThousandsDataNoPoint = (dataString: number) => {
  if (dataString !== 0 && !dataString) {
    return '';
  }
  // 如果数据为整数，只需要做千分位加分号处理
  const numTextInt = `${Number(dataString)}`.replace(
    /\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,
    '$&,'
  );
  return numTextInt;
};

export const toDenary = (dateNumber: number) => {
  return dateNumber < 10 ? `0${dateNumber}` : dateNumber;
};

export const getDenaryDate = (time?: number | string) => {
  const { Y, M, W, D, h, min, s, ms } = getDate(time);
  return {
    Y: Y,
    M: toDenary(M + 1),
    W: W, //周几
    D: toDenary(D),
    h: toDenary(h),
    min: toDenary(min),
    s: s,
    ms: ms,
  };
};

/**
 * 获取window.location.origin
 */
export const getLocationOrigin = () => {
  const { location } = window;
  let locationOrigin = location.origin;
  if (!locationOrigin) {
    locationOrigin = `${location.protocol}//${location.hostname}${
      location.port ? `:${location.port}` : ''
    }`;
  }
  return locationOrigin;
};

export const accMul = (arg1: number, arg2: number) => {
  let m = 0;
  const s1 = arg1.toString();
  const s2 = arg2.toString();
  try {
    const temp1 = s1.split('.');
    if (temp1.length > 1) {
      m += temp1[1].length;
    }
  } catch (e) {
    console.log(e);
  }
  try {
    const temp2 = s2.split('.');
    if (temp2.length > 1) {
      m += temp2[1].length;
    }
  } catch (e) {
    console.log(e);
  }
  return (
    (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) /
    Math.pow(10, m)
  );
};
