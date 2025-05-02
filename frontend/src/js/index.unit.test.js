import { exampleFunction } from './index.js';

jest.mock('./config.js');

describe('Example Unit Test', () => {
  beforeEach(() => {});

  afterEach(() => {});

  describe('Example Suite', () => {
    test('should return true.', async () => {
      expect(exampleFunction()).toEqual(true);
    });
  });
});
