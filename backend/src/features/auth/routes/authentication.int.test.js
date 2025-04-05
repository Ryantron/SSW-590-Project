import session from 'supertest-session';

import path from 'path';

import { adminConfig } from '@/shared/configs/settings.js';

import { app, mongoStore } from '@/app/app';
import { routes } from '@/shared/configs/routes';

describe('Authentication', () => {
  let testSession = null;
  beforeAll(async () => {
    testSession = session(app);
  });

  describe('POST login', () => {
    test('should return with session token.', async () => {
      const result = await testSession
        .post(path.join(routes.auth, '/login'))
        .send({
          username: adminConfig.username,
          password: adminConfig.password,
        });

      expect(result.status).toEqual(200);
    });
  });

  afterAll(async () => {
    await mongoStore.close();
  });
});
