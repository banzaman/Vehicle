import fetchMakes from './__mocks__/fetchMakes';

describe('fetchMakes', () => {
  test('Should return defined data', () => {
    expect(fetchMakes()).toBeDefined();
  });

  test('Fetch make must return a value of 5', () => {
    expect(fetchMakes()).toHaveLength(5);
  });

  test('First fetched make must be " MID-TOWN TRAILERS"', () => {
    expect(fetchMakes()[0].Make_Name).toBe(' MID-TOWN TRAILERS');
  });
});
