import { addBlog } from '@/features/blog/data/blog.js';
import {
  generateRandomContent,
  generateRandomTitle,
} from './_randomGenerator.js';
import { closeConnection } from '@/shared/configs/dataStorage.js';

(async () => {
  for (let i = 0; i <= 10; i++) {
    console.log(`Adding blog #${i}`);
    await addBlog({
      title: generateRandomTitle(),
      content: generateRandomContent(),
    });
  }

  await closeConnection();
})();
