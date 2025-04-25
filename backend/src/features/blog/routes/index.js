import { publicBlogRouter } from './public';
import { protectedBlogRouter } from './protected';
import { joinPath } from '@/shared/utils/helpers';

export default function createRoutesWith(app, baseRoute) {
  // app.use('/api/example', exampleRouter);
  app.use(baseRoute, publicBlogRouter);
  app.use(joinPath(baseRoute, 'protected'), protectedBlogRouter);
}
