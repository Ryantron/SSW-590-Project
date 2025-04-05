import express from 'express';
import session from 'express-session';
import cors from 'cors';
import MongoStore from 'connect-mongo';

import path from 'path';

import useAuthRoutes from '../features/auth/routes';
import useBlogRoutes from '../features/blog/routes';
import { protectRoute } from '../features/auth/middlewares';
import { frontendConfig, sessionConfig } from '../shared/configs/settings';
import { routes } from '@/shared/configs/routes';

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

export const mongoStore = MongoStore.create(sessionConfig.store);

app.use(express.json());
app.use(
  session({
    ...sessionConfig,
    store: mongoStore,
  }),
);

// Middleware to log the requester's URL
app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
});

app.use(path.join(routes.blog, '/protected'), protectRoute());

/**
 * Routes
 */

useAuthRoutes(app, routes.auth);
useBlogRoutes(app, routes.blog);

app.use('*', (_, res) => {
  res.status(404).json({ error: 'Not found' });
});
