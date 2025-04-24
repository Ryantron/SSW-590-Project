import session from 'supertest-session';

import path from 'path';

import { app, mongoStore } from '@/app/app';
import { routes } from '@/shared/configs/routes';
import { closeConnection, dropBlogs } from '@/shared/configs/dataStorage';
// import { adminConfig } from '@/shared/configs/settings';

const data = {
  title: 'Tariff increased to 200% against EU.',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

describe('Public Blog', () => {
  let testSession = null;
  beforeAll(async () => {
    // BUG: testSession not saving cookie
    testSession = session(app);

    // await testSession
    //   .post(path.join(routes.auth, 'login'))
    //   .send({
    //     username: adminConfig.username,
    //     password: adminConfig.password,
    //   })
    //   .expect(200);
  });

  afterAll(async () => {
    await dropBlogs();
    await closeConnection();
  });

  describe('POST a new blog', () => {
    // test('should return a new blog.', async () => {
    //   console.log('Cookies: ', testSession.cookies);
    //   const response = await testSession
    //     .post(path.join(routes.blog, '/protected'))
    //     .send(data);
    //   console.log(JSON.parse(response.text));
    //   const [result] = [JSON.parse(response.text).blog].map((blog) => ({
    //     title: blog.title,
    //     content: blog.content,
    //   }));
    //   expect(result).toEqual(data);
    // });

    test('should error since user is not logged in', async () => {
      const response = await testSession
        .post(path.join(routes.blog, '/protected'))
        .send(data);
      expect(response.status).toEqual(401);
    });
  });

  afterAll(async () => {
    await mongoStore.close();
  });
});
