import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import cors from 'cors';
import useAuthRoutes from '../features/auth/routes';
import useBlogRoutes from '../features/blog/routes';
import { protectRoute } from '../features/auth/middlewares';
import { corsConfig, sessionConfig } from '../shared/configs/settings';
import { routes } from '@/shared/configs/routes';
import { joinPath } from '@/shared/utils/helpers';

export const app = express();

/**
 * Middlewares
 */

app.use(cors(corsConfig));

app.use(cookieParser());

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
  console.log(`Cookies: `, req.cookies);
  next();
});

app.use(joinPath(routes.blog, '/protected'), protectRoute());

/**
 * Routes
 */

useAuthRoutes(app, routes.auth);
useBlogRoutes(app, routes.blog);

app.use('*', (_, res) => {
  res.status(404).json({ error: 'Not found' });
});
