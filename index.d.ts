// Type definitions for TOAST UI Date v0.0.1
// TypeScript Version: 3.7.5

export interface DateInterface {
  setTimezoneOffset(offset: number): DateInterface;

  setTimezoneName(zoneName: string): DateInterface;

  clone(): DateInterface;

  toDate(): Date;

  getTime(): number;

  getTimezoneOffset(): number;

  getFullYear(): number;

  getMonth(): number;

  getDate(): number;

  getHours(): number;

  getMinutes(): number;

  getSeconds(): number;

  getMilliseconds(): number;

  getDay(): number;

  setTime(time: number): number;

  setFullYear(year: number, month?: number, date?: number): number;

  setMonth(month: number, date?: number): number;

  setDate(date: number): number;

  setHours(hours: number, min?: number, sec?: number, ms?: number): number;

  setMinutes(min: number, sec?: number, ms?: number): number;

  setSeconds(sec: number, ms?: number): number;

  setMilliseconds(ms: number): number;

  toString(): string;
}

export interface DateConstructor {
  new (...args: any[]): DateInterface;
}

export interface MomentDateConstructor extends DateConstructor {
  static setMoment(moment: moment.Moment): MomentDateConstructor;
}

declare var LocalDate: DateConstructor;
declare var UTCDate: DateConstructor;
declare var MomentDate: MomentDateConstructor;
