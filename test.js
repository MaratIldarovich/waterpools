const { calculateWaterAmount } = require('./index');

test('data from task', () => {
  expect(calculateWaterAmount([5,2,3,4,5,4,0,3,1])).toBe(9);
});

test('custom data', () => {
  expect(calculateWaterAmount([4,2,3,4,5,4,0,3,1])).toBe(6);
});

test('plateau', () => {
  expect(calculateWaterAmount([1,1,1,1,1])).toBe(0);
});

test('identical skyscrapers', () => {
  expect(calculateWaterAmount([100,0,0,100,0,0,100])).toBe(400);
});

test('houses between identical skyscrapers', () => {
  expect(calculateWaterAmount([100,0,1,100,0,1,100])).toBe(398);
});

test('large puddle', () => {
  expect(calculateWaterAmount([2,3,1,3,1,2,1,6,6,6])).toBe(7);
});

test('two houses', () => {
  expect(calculateWaterAmount([4,0,3])).toBe(3);
});