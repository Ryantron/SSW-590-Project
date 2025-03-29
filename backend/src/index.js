import { app } from './app/app.js';
import { serverConfig } from './shared/configs/settings.js';

app.listen(serverConfig.port, () => {
  console.log(
    `Server is running on ${serverConfig.url} on port ${serverConfig.port}`
  );
});
