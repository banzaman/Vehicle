import fetchMotos from './__mocks__/fetchMotos';

describe('fetchMotos', () => {
  test('Should return defined data', () => {
    expect(fetchMotos()).toBeDefined();
  });

  test('Fetch make must return a value of 3', () => {
    expect(fetchMotos()).toHaveLength(3);
  });

  test('First fetched make must be "BUELL (EBR)"', () => {
    expect(fetchMotos()[0].MakeName).toBe('BUELL (EBR)');
  });
});
