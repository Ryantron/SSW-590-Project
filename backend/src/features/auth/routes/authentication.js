import express from 'express';
import { handleRouteError, validate } from '@/shared/utils/Error';
import { authSchema } from '../validations/auth';
import { login } from '../data/authentication';

const router = express.Router();

router.route('/login').post(async (req, res) => {
  try {
    const loginCredentials = validate(authSchema, req.body);
    const isLoggedIn = await login(
      loginCredentials.username,
      loginCredentials.password,
    );
    if (isLoggedIn) {
      req.session.isLoggedIn = isLoggedIn;

      res.json({ message: 'User successfully logged in' });
    } else {
      res.status(401).send('Login Failed. Incorrect username or password.');
    }
  } catch (error) {
    handleRouteError(error, res);
  }
  return;
});

router.route('/register').post(async (req, res) => {
  try {
    res.status(403).json({ message: 'Registering via API is not allowed.' });
  } catch (error) {
    handleRouteError(error, res);
  }
  return;
});

export { router as authenticationRouter };
