import express from 'express';
import { handleRouteError } from '@/shared/utils/Error';

const router = express.Router();

router.route('/blog').get(async (req, res) => {
  try {
    res.json({ message: 'Not implemented yet.' });
  } catch (error) {
    handleRouteError(error, res);
  }
  return;
});

router.route('/blog/:id').get(async (req, res) => {
  try {
    res.json({ message: 'Not implemented yet.' });
  } catch (error) {
    handleRouteError(error, res);
  }
  return;
});

export { router as publicBlogRouter };
