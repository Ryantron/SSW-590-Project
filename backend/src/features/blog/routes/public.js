import express from 'express';
import { handleRouteError, validate } from '@/shared/utils/Error';
import { getAllBlogs, getBlog } from '../data/blog';
import { stringObjectIdSchema } from '@/shared/validations/mongo';

const router = express.Router();

router.route('/').get(async (req, res) => {
  try {
    res.json({ blogs: await getAllBlogs() });
  } catch (error) {
    handleRouteError(error, res);
  }
  return;
});

router.route('/:id').get(async (req, res) => {
  try {
    const id = validate(stringObjectIdSchema, req.params.id, 401);
    res.json({ blog: await getBlog(id) });
  } catch (error) {
    handleRouteError(error, res);
  }
  return;
});

export { router as publicBlogRouter };
