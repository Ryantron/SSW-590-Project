import { blogs } from '@/shared/configs/dataStorage';
import { StatusError } from '@/shared/utils/Error';
import { ObjectId } from 'mongodb';

export async function getAllBlogs() {
  const blogsCollection = await blogs();
  const blogsArray = await blogsCollection.find({}).toArray();

  if (blogsArray === null) {
    throw new StatusError(500, 'No blogs document found');
  }

  console.log(blogsArray);

  return blogsArray.map((blog) => {
    blog._id = blog._id.toString();
    return blog;
  });
}

export async function getBlog(id) {
  const blogsCollection = await blogs();
  const blog = await blogsCollection.findOne({
    _id: ObjectId.createFromHexString(id),
  });
  if (blog === null) {
    throw new StatusError(404, 'Blog not found');
  }

  blog._id = blog._id.toString();
  return blog;
}

export async function addBlog(blog) {
  const blogsCollection = await blogs();
  const date = Date.now();

  const insertedInfo = await blogsCollection.insertOne({
    ...blog,
    datePosted: date,
  });
  const insertedBlog = await blogsCollection.findOne({
    _id: insertedInfo.insertedId,
  });
  if (insertedBlog === null) {
    throw new StatusError(500, 'Failed to insert blog');
  }

  insertedBlog._id = insertedBlog._id.toString();

  return insertedBlog;
}
