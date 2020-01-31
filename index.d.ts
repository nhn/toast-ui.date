// Type definitions for TOAST UI Date v0.0.1
// TypeScript Version: 3.7.5

export default interface DateInteface {
  setTimezoneOffset(offset: number): DateInteface;

  setTimezoneName(zoneName: string): DateInteface;

  clone(): DateInteface;

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
}
