import fetchCars from './__mocks__/fetchCars';

// Unit testing
describe('fetchCars', () => {
  test('Should return defined data', () => {
    expect(fetchCars()).toBeDefined();
  });

  test('Fetch car must return a value of 2', () => {
    expect(fetchCars()).toHaveLength(2);
  });

  test('First fetched car must be "ASTON MARTIN"', () => {
    expect(fetchCars()[0].MakeName).toBe('ASTON MARTIN');
  });
});
