import fetchParts from './__mocks__/fetchParts';

describe('fetchParts', () => {
  test('Should return defined data', () => {
    expect(fetchParts()).toBeDefined();
  });

  test('Fetch make must return a value of 2', () => {
    expect(fetchParts()).toHaveLength(2);
  });

  test('First fetched make must be "SHANDONG FOCUS INDUSTRY CO., LIMITED"', () => {
    expect(fetchParts()[0].ManufacturerName).toBe('SHANDONG FOCUS INDUSTRY CO., LIMITED');
  });
});
