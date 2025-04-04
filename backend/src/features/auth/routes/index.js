import path from 'path';
import { authenticationRouter } from './authentication';

export default function createRoutesWith(app, baseRoute) {
  // app.use('/api/example', exampleRouter);
  app.use(baseRoute, authenticationRouter);
  app.use(path.join(baseRoute, '*'), (_, res) => {
    res.status(404).json({ error: 'Not found' });
  });
}
