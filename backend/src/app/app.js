import express from 'express';
import session from 'express-session';
import cors from 'cors';
import MongoStore from 'connect-mongo';

import useAuthRoutes from '../features/auth/routes';
import { protectRoute } from '../features/auth/middlewares';
import { frontendConfig, sessionConfig } from '../shared/configs/settings';

export const app = express();

app.use(
  cors({
    origin: frontendConfig.url,
    credentials: true,
  }),
);

/**
 * Middlewares
 */

app.use(express.json());
app.use(
  session({
    ...sessionConfig,
    store: MongoStore.create(sessionConfig.store),
  }),
);

// Middleware to log the requester's URL
app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
});

app.use('/api/blog/protected', protectRoute());

/**
 * Routes
 */

useAuthRoutes(app, '/api/auth');

app.use('*', (_, res) => {
  res.status(404).json({ error: 'Not found' });
});
