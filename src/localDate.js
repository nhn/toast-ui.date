import isString from 'tui-code-snippet/type/isString';
/**
 * datetime regex from https://www.regexpal.com/94925
 * timezone regex from moment
 */
const isoregex = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\\.[0-9]+)?([+-]\d\d(?::?\d\d)?|\s*Z)?$/;

function throwNotSupported() {
  throw new Error('This operation is not supported.');
}

// eslint-disable-next-line complexity
function getDateTime(match) {
  const [y, m, d, h, M, s, ms, zoneInfo] = match.slice(1);

  return {
    y: Number(y),
    m: Number(m) - 1 || 0,
    d: Number(d) || 0,
    h: Number(h) || 0,
    M: Number(M) || 0,
    s: Number(s) || 0,
    ms: Number(ms) || 0,
    zoneInfo
  };
}

export default class LocalDate {
  constructor(...args) {
    if (args[0] instanceof Date) {
      this.d = new Date(args[0].getTime());
    } else if (isString(args[0])) {
      const match = isoregex.exec(args[0]);
      if (match) {
        const info = getDateTime(match);
        const { y, m, d, h, M, s, ms, zoneInfo } = info;
        if (!zoneInfo) {
          this.d = new Date(y, m, d, h, M, s, ms);
        }
      }
    }

    if (!this.d) {
      this.d = new Date(...args);
    }
  }

  setTimezoneOffset() {
    throwNotSupported();
  }

  setTimezoneName() {
    throwNotSupported();
  }

  clone() {
    return new LocalDate(this.d);
  }

  toDate() {
    return new Date(this.d.getTime());
  }

  toString() {
    return this.d.toString();
  }
}

const getterMethods = [
  'getTime',
  'getTimezoneOffset',
  'getFullYear',
  'getMonth',
  'getDate',
  'getHours',
  'getMinutes',
  'getSeconds',
  'getMilliseconds',
  'getDay'
];

const setterMethods = [
  'setTime',
  'setFullYear',
  'setMonth',
  'setDate',
  'setHours',
  'setMinutes',
  'setSeconds',
  'setMilliseconds'
];

getterMethods.forEach(methodName => {
  LocalDate.prototype[methodName] = function(...args) {
    return this.d[methodName](...args);
  };
});

setterMethods.forEach(methodName => {
  LocalDate.prototype[methodName] = function(...args) {
    return this.d[methodName](...args);
  };
});
