import session from 'supertest-session';

import path from 'path';

import { app, mongoStore } from '@/app/app';
import { routes } from '@/shared/configs/routes';
import { addBlog } from '../data/blog';
import { closeConnection, dropBlogs } from '@/shared/configs/dataStorage';

const data = {
  title: 'Tariff increased to 200% against EU.',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

describe('Public Blog', () => {
  let testSession = null;
  let blog = null;
  beforeAll(async () => {
    testSession = session(app);
    blog = await addBlog(data);
  });

  afterAll(async () => {
    await dropBlogs();
    await closeConnection();
  });

  describe('GET blogs', () => {
    test('should return an array with one blog.', async () => {
      const response = await testSession.get(path.join(routes.blog, '/'));
      const result = JSON.parse(response.text).blogs.map((blog) => ({
        title: blog.title,
        content: blog.content,
      }));

      expect(result).toEqual([data]);
    });
  });

  describe('GET one blog', () => {
    test('should return an array with one blog.', async () => {
      const response = await testSession.get(
        path.join(routes.blog, `/${blog._id}`),
      );
      const [result] = [JSON.parse(response.text).blog].map((blog) => ({
        title: blog.title,
        content: blog.content,
      }));

      expect(result).toEqual(data);
    });
  });

  afterAll(async () => {
    await mongoStore.close();
  });
});
