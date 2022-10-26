const {calculateWaterAmount} = require('./index');

test('data from task', () => {
  expect(calculateWaterAmount([5,2,3,4,5,4,0,3,1])).toBe(9);
});

test('plateau', () => {
  expect(calculateWaterAmount([1,1,1,1,1])).toBe(0);
});

test('identical skyscrapers', () => {
  expect(calculateWaterAmount([100,0,0,100,0,0,100])).toBe(400);
});