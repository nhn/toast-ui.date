import moment from 'moment-timezone';
import timezones from 'moment-timezone/data/packed/latest.json';
import MomentDate from '../src/momentDate';

moment.tz.load(timezones);

test('TimezoneDate implements based on moment', () => {
  const date = new MomentDate('2020-01-29T19:20:00');

  expect(moment.isMoment(date.m)).toBe(true);
  expect(date.toDate() instanceof Date).toBe(true);
  expect(() => date.setTimezoneOffset(420)).not.toThrow();
  expect(() => date.setTimezoneName('Asia/Seoul')).not.toThrow();

  const cloned = date.clone();

  expect(cloned instanceof MomentDate).toBe(true);
  expect(cloned.getTime()).toBe(date.getTime());
});

test('TimezoneDate uses moment getters', () => {
  const nativeDate = new Date('2020-01-29T19:20:00');
  const date = new MomentDate('2020-01-29T19:20:00');

  expect(date.getTime()).toBe(nativeDate.getTime());
  expect(date.getTimezoneOffset()).toBe(nativeDate.getTimezoneOffset());
  expect(date.getFullYear()).toBe(nativeDate.getFullYear());
  expect(date.getMonth()).toBe(nativeDate.getMonth());
  expect(date.getDate()).toBe(nativeDate.getDate());
  expect(date.getHours()).toBe(nativeDate.getHours());
  expect(date.getMinutes()).toBe(nativeDate.getMinutes());
  expect(date.getSeconds()).toBe(nativeDate.getSeconds());
  expect(date.getMilliseconds()).toBe(nativeDate.getMilliseconds());
  expect(date.getDay()).toBe(nativeDate.getDay());
});

test('TimezoneDate uses moment setters', () => {
  const nativeDate = new Date('2020-01-29T19:20:00');
  const date = new MomentDate();
  const time = nativeDate.getTime();
  const ONE_MINUTE = 60 * 1000;
  const ONE_SECOND = 1 * 1000;

  expect(date.setTime(time)).toBe(time);
  expect(date.setFullYear(2020, 0, 29)).toBe(time);
  expect(date.setMonth(0, 29)).toBe(time);
  expect(date.setDate(29)).toBe(time);
  expect(date.setHours(19, 20, 0, 0)).toBe(time);
  expect(date.setMinutes(21, 0, 0)).toBe(time + ONE_MINUTE);
  expect(date.setSeconds(1, 0)).toBe(time + ONE_MINUTE + ONE_SECOND);
  expect(date.setMilliseconds(1)).toBe(time + ONE_MINUTE + ONE_SECOND + 1);
});

test('TimezoneDate.setTimezoneOffset should set utcOffset', () => {
  const offset = 420;
  const date = new MomentDate().setTimezoneOffset(offset);
  const utc = new MomentDate().setTimezoneOffset(0);

  // reversed sign
  expect(date.getTimezoneOffset()).toBe(offset);
  expect(utc.getTimezoneOffset()).toBe(0);
});

test('TimezoneDate.setTimezoneName should set a timezone name', () => {
  const timezoneName = 'US/Pacific';
  const pst = 480;
  const pdt = 420;
  const jun = new MomentDate('2020-06-01T00:00:00').setTimezoneName(timezoneName);
  const dec = new MomentDate('2020-12-01T00:00:00').setTimezoneName(timezoneName);
  const utc = new MomentDate('2020-12-01T00:00:00').setTimezoneName('Etc/UTC');

  // reversed sign
  expect(jun.getTimezoneOffset()).toBe(pdt);
  expect(dec.getTimezoneOffset()).toBe(pst);
  expect(utc.getTimezoneOffset()).toBe(0);
});
