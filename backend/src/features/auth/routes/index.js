import { authenticationRouter } from './authentication';

export default function createRoutesWith(app, baseRoute) {
  // app.use('/api/example', exampleRouter);
  app.use(baseRoute, authenticationRouter);
}
