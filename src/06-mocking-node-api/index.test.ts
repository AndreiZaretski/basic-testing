// Uncomment the code below and write your tests
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '.';

import path from 'path';
//import  from 'fs/promises';
import fs from 'fs';

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    // Write your test here
    jest.spyOn(global, 'setTimeout');
    const callback = jest.fn();
    const timeout = 1435;

    doStuffByTimeout(callback, timeout);

    expect(setTimeout).toBeCalledWith(callback, timeout);
  });

  test('should call callback only after timeout', () => {
    // Write your test here
    const callback = jest.fn();
    const timeout = 1435;

    doStuffByTimeout(callback, timeout);

    expect(callback).not.toBeCalled();

    jest.advanceTimersByTime(timeout);

    expect(callback).toBeCalled();
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    // Write your test here
    jest.spyOn(global, 'setInterval');
    const callback = jest.fn();
    const interval = 1435;
    doStuffByInterval(callback, interval);
    expect(setInterval).toBeCalledWith(callback, interval);
  });

  test('should call callback multiple times after multiple intervals', () => {
    // Write your test here
    const callback = jest.fn();
    const interval = 1435;

    doStuffByInterval(callback, interval);
    expect(callback).not.toBeCalled();
    jest.advanceTimersByTime(interval);
    expect(callback).toBeCalledTimes(1);
    jest.advanceTimersByTime(interval);
    expect(callback).toBeCalledTimes(2);
    jest.advanceTimersByTime(interval);
    expect(callback).toBeCalledTimes(3);
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    // Write your test here
    const joinSpy = jest.spyOn(path, 'join');
    const pathToFile = 'someFile.txt';
    await readFileAsynchronously(pathToFile);
    expect(joinSpy).toBeCalledWith(__dirname, pathToFile);
    joinSpy.mockRestore();
  });

  test('should return null if file does not exist', async () => {
    // Write your test here
    const existsSyncMock = jest.spyOn(fs, 'existsSync').mockReturnValue(false);
    const pathToFile = 'nonFile.txt';
    const result = await readFileAsynchronously(pathToFile);
    expect(result).toBeNull();
    existsSyncMock.mockRestore();
  });

  test('should return file content if file exists', async () => {
    // Write your test here

    const fileContent = 'Some file content';
    const pathToFile = 'SomeFile.txt';
    const existsSyncMock = jest.spyOn(fs, 'existsSync').mockReturnValue(true);
    const readFileMock = jest
      .spyOn(fs.promises, 'readFile')
      .mockResolvedValue(fileContent);
    const result = await readFileAsynchronously(pathToFile);
    expect(result).toBe(fileContent);
    readFileMock.mockRestore();
    existsSyncMock.mockRestore();
  });
});
