import { exampleFunction } from './index.js';

describe('Example Integration Test', () => {
  describe('Example Suite', () => {
    test('should return true.', async () => {
      expect(exampleFunction()).toEqual(true);
    });
  });
});
