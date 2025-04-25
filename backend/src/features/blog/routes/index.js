import path from 'path';
import { publicBlogRouter } from './public';
import { protectedBlogRouter } from './protected';

export default function createRoutesWith(app, baseRoute) {
  // app.use('/api/example', exampleRouter);
  app.use(baseRoute, publicBlogRouter);
  app.use(path.join(baseRoute, 'protected'), protectedBlogRouter);
}
