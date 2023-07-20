import calculate from './calculate';

describe('calculate', () => {
  test('returns updated object with AC', () => {
    const res = calculate({ total: '8', next: '9', operation: '-' }, 'AC');
    expect(res).toEqual({ total: null, next: null, operation: null });
  });

  test('update object with decimal', () => {
    const res = calculate({ total: '8', next: null, operation: null }, '.');
    expect(res).toEqual({ total: '8', next: '8.', operation: null });
  });

  test('simple operation with =', () => {
    const res = calculate({ total: '8', next: '2', operation: 'x' }, '=');
    expect(res).toEqual({ total: '16', next: null, operation: null });
  });

  test('simple operation with =', () => {
    const res = calculate({ total: '8', next: '2', operation: '÷' }, '=');
    expect(res).toEqual({ total: '4', next: null, operation: null });
  });

  test('change sign', () => {
    const res = calculate({ total: '8', next: null, operation: null }, '+/-');
    expect(res).toEqual({ total: '-8', next: null, operation: null });
  });

  test('change sign next', () => {
    const res = calculate({ total: '8', next: '3', operation: '+' }, '+/-');
    expect(res).toEqual({ total: '8', next: '-3', operation: '+' });
  });
});
