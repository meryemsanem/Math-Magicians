import operate from './operate';

describe('operate', () => {
  test('should add two numbers correctly', () => {
    const res = operate(9, 3, '+');
    expect(res).toEqual('12');
  });
});

describe('operate', () => {
  test('should substract two numbers correctly', () => {
    const res = operate(9, 3, '-');
    expect(res).toEqual('6');
  });
});

describe('operate', () => {
  test('should multiply two numbers correctly', () => {
    const res = operate(9, 3, 'x');
    expect(res).toEqual('27');
  });
});

describe('operate', () => {
  test('should divide two numbers correctly', () => {
    const res = operate(9, 3, '÷');
    expect(res).toEqual('3');
  });
});

describe('operate', () => {
  test('should calculate modulus of the number correctly', () => {
    const res = operate(9, 3, '%');
    expect(res).toEqual('0');
  });
});
