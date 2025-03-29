import express from 'express';
import { handleRouteError, validate } from '@/shared/utils/Error';
import { authSchema } from '../validations/auth';

const router = express.Router();

router.route('/login').post(async (req, res) => {
  try {
    const loginCredentials = validate(authSchema, req.body);
    const userId = await login(
      loginCredentials.username,
      loginCredentials.password
    );
    if (userId) {
      req.session.userId = userId;

      res.json({ userId });
    } else {
      res.status(500).send('Login Failed');
    }
  } catch (error) {
    handleRouteError(error, res);
  }
  return;
});

router.route('/register').post(async (req, res) => {
  try {
    res.json({ message: 'Register is not implemented yet.' });
  } catch (error) {
    handleRouteError(error, res);
  }
  return;
});

export { router as authenticationRouter };
