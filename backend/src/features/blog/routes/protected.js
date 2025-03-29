import express from 'express';
import { handleRouteError } from '@/shared/utils/Error';

const router = express.Router();

router.route('/blog').post(async (req, res) => {
  try {
    if (req.session.userId === undefined) {
      res.status(400).send('User not logged in');
      return;
    }
    // const userId = req.session.userId;

    res.json({ message: 'Not implemented yet.' });
  } catch (error) {
    handleRouteError(error, res);
  }
  return;
});

export { router as protectedBlogRouter };
