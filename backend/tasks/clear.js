import { closeConnection } from '@/shared/configs/dataStorage';
import { dropBlogs } from '@/shared/configs/dataStorage';

(async () => {
  await dropBlogs();
  await closeConnection();
})();
