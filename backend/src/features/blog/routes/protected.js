import express from 'express';
import { handleRouteError, validate } from '@/shared/utils/Error';
import { addBlogSchema } from '../validation/blog';
import { addBlog } from '../data/blog';

const router = express.Router();

router.route('/').post(async (req, res) => {
  try {
    const blog = validate(addBlogSchema, req.body);

    const result = await addBlog(blog);

    res.json({ blog: result });
  } catch (error) {
    handleRouteError(error, res);
  }
  return;
});

export { router as protectedBlogRouter };
