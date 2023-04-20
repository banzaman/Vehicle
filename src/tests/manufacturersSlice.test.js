import fetchManufacturers from './__mocks__/fetchManufacturers';

describe('fetchManufacturers', () => {
  test('Should return defined data', () => {
    expect(fetchManufacturers()).toBeDefined();
  });

  test('Fetch make must return a value of 8', () => {
    expect(fetchManufacturers()).toHaveLength(8);
  });

  test('First fetched make must be "TESLA, INC."', () => {
    expect(fetchManufacturers()[0].Mfr_Name).toBe('TESLA, INC.');
  });
});
