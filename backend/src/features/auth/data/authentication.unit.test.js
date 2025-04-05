import { login } from './authentication.js';
import { adminConfig } from '@/shared/configs/settings.js';

describe('Authentication', () => {
  describe('when valid credentials are provided for login', () => {
    test('should return true.', async () => {
      const result = await login(adminConfig.username, adminConfig.password);

      expect(result).toEqual(true);
    });
  });
});
