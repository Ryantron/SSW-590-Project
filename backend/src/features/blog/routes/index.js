import path from 'path';
import { publicBlogRouter } from './public';
import { protectedBlogRouter } from './protected';

export default function createRoutesWith(app, baseRoute) {
  // app.use('/api/example', exampleRouter);
  app.use(baseRoute, publicBlogRouter);
  app.use(path.join(baseRoute, 'protected'), protectedBlogRouter);

  app.use(path.join(baseRoute, '*'), (_, res) => {
    res.status(404).json({ error: 'Blog not found' });
  });
}
