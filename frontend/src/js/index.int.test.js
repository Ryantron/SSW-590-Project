import { exampleFunction } from './index.js';

describe('Example Unit Test', () => {
  describe('Example Suite', () => {
    test('should return true.', async () => {
      expect(exampleFunction()).toEqual(true);
    });
  });
});
