function throwNotSupported() {
  throw new Error('This operation is not supported.');
}
export default class LocalDate {
  constructor(...args) {
    if (args[0] instanceof Date) {
      this.d = new Date(args[0].getTime());
    } else {
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
