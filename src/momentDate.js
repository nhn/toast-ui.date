import moment from 'moment-timezone';
// from '@toast-ui/date/LocalDate';
// from '@toast-ui/date/UTCDate';
// from '@toast-ui/date/MomentDate';
// '@toast-ui/date'

// 'tui.date.LocalDate';
// 'tui.date.UTCDate';
// 'tui.date.MomentDate';

export default class MomentDate {
  constructor(...args) {
    this.m = moment(...args);
  }

  setTimezoneOffset(offset) {
    this.m.utcOffset(-offset);

    return this;
  }

  setTimezoneName(zoneName) {
    this.m.tz(zoneName);

    return this;
  }

  clone() {
    return new MomentDate(this.m);
  }

  toDate() {
    return this.m.toDate();
  }

  getTime() {
    return this.m.valueOf();
  }

  getTimezoneOffset() {
    const offset = -this.m.utcOffset();

    if (Math.abs(offset) === 0) {
      return 0;
    }

    return offset;
  }

  getFullYear() {
    return this.m.year();
  }

  getMonth() {
    return this.m.month();
  }

  getDate() {
    return this.m.date();
  }

  getHours() {
    return this.m.hours();
  }

  getMinutes() {
    return this.m.minutes();
  }

  getSeconds() {
    return this.m.seconds();
  }

  getMilliseconds() {
    return this.m.milliseconds();
  }

  getDay() {
    return this.m.day();
  }

  setTime(t) {
    this.m = moment(t);

    return this.getTime();
  }

  setFullYear(y, m = this.getMonth(), d = this.getDate()) {
    this.m
      .year(y)
      .month(m)
      .date(d);

    return this.getTime();
  }

  setMonth(m, d = this.m.date()) {
    this.m.month(m).date(d);

    return this.getTime();
  }

  setDate(d) {
    this.m.date(d);

    return this.getTime();
  }

  setHours(h, M = this.getMinutes(), s = this.getSeconds(), ms = this.getMilliseconds()) {
    this.m
      .hours(h)
      .minutes(M)
      .seconds(s)
      .milliseconds(ms);

    return this.getTime();
  }

  setMinutes(M, s = this.getSeconds(), ms = this.getMilliseconds()) {
    this.m
      .minutes(M)
      .seconds(s)
      .milliseconds(ms);

    return this.getTime();
  }

  setSeconds(s, ms = this.getMilliseconds()) {
    this.m.seconds(s).milliseconds(ms);

    return this.getTime();
  }

  setMilliseconds(ms) {
    this.m.milliseconds(ms);

    return this.getTime();
  }
}
