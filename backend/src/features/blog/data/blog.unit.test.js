import { closeConnection, dbConnection } from '@/shared/configs/dataStorage.js';
import { getAllBlogs, getBlog, addBlog } from './blog.js';

const data = {
  title: 'Tariff increased to 200% against EU.',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

describe('Blogs', () => {
  let blog = null;
  beforeAll(async () => {
    await dbConnection(globalThis.__MONGO_URI__, globalThis.__MONGO_DB_NAME__);

    blog = await addBlog(data);
  });

  afterAll(async () => {
    await closeConnection();
  });

  describe('Get all blogs', () => {
    test('should return an array of one blog.', async () => {
      const result = (await getAllBlogs()).map((blog) => ({
        title: blog.title,
        content: blog.content,
      }));

      expect(result).toEqual([data]);
    });
  });

  describe('Get one blog', () => {
    test('should return one blog.', async () => {
      const result = await getBlog(blog._id);

      expect(result).toEqual(blog);
    });
  });

  describe('Add one blog', () => {
    test('should return one blog.', async () => {
      const result = [await addBlog(data)].map((blog) => ({
        title: blog.title,
        content: blog.content,
      }))[0];

      expect(result).toEqual(data);
    });
  });
});
