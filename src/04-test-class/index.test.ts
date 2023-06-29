// Uncomment the code below and write your tests
import _ from 'lodash';
import {
  InsufficientFundsError,
  SynchronizationFailedError,
  TransferFailedError,
  getBankAccount,
} from '.';

//jest.mock('lodash', () => ({ random: () => null }));

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    // Write your test here
    const initialBalance = 167;

    const account = getBankAccount(initialBalance);

    expect(account.getBalance()).toBeCloseTo(initialBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    // Write your test here
    const balance = 100;
    const amount = 200;
    const account = getBankAccount(balance);

    expect(() => account.withdraw(amount)).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    // Write your test here
    const initialBalance = 100;
    const amount = 200;
    const fromAccount = getBankAccount(initialBalance);
    const toAccount = getBankAccount(0);

    expect(() => fromAccount.transfer(amount, toAccount)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring to the same account', () => {
    // Write your test here
    const initialBalance = 100;
    const amount = 50;
    const fromAccount = getBankAccount(initialBalance);

    expect(() => fromAccount.transfer(amount, fromAccount)).toThrow(
      TransferFailedError,
    );
  });

  test('should deposit money', () => {
    // Write your test here
    const initialBalance = 167;
    const account = getBankAccount(initialBalance);
    const balance = account.getBalance();
    const deposit = 1045;

    account.deposit(deposit);

    expect(account.getBalance()).toBeCloseTo(balance + deposit);
  });

  test('should withdraw money', () => {
    // Write your test here
    const initialBalance = 167;
    const account = getBankAccount(initialBalance);
    const balance = account.getBalance();
    const amount = 39;
    account.withdraw(amount);

    expect(account.getBalance()).toBeCloseTo(balance - amount);
  });

  test('should transfer money', () => {
    // Write your test here
    const initialBalanceFrom = 123;
    const initialBalanceTo = 456;
    const fromAccount = getBankAccount(initialBalanceFrom);
    const toAccount = getBankAccount(initialBalanceTo);
    const amount = 122;

    fromAccount.transfer(amount, toAccount);

    expect(fromAccount.getBalance()).toBeCloseTo(initialBalanceFrom - amount);
    expect(toAccount.getBalance()).toBeCloseTo(initialBalanceTo + amount);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
    const account = getBankAccount(160);

    jest.spyOn(_, 'random').mockReturnValue(67);

    const balance = await account.fetchBalance();
    expect(balance).toBe(67);
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
    const account = getBankAccount(567);

    jest.spyOn(_, 'random').mockReturnValue(54);

    await account.synchronizeBalance();
    expect(account.getBalance()).toBe(54);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
    const account = getBankAccount(100);
    jest.spyOn(_, 'random').mockReturnValue(0);

    await expect(account.synchronizeBalance()).rejects.toThrow(
      SynchronizationFailedError,
    );
  });
});
