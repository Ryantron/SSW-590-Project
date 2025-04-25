import { z } from 'zod';

export const addBlogSchema = z.object({
  title: z.string().trim(),
  content: z.string().trim(),
});
