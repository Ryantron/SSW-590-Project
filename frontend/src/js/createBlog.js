import axios from 'axios';
import { backendConfig } from './config.js';

// const createBlogPost = async (title, content) => {
//   try {
//     const response = await axios.post(backendConfig.url + '/api/blog/protected', { title, content });
//     console.log(response.data.blog);
//   } catch (error) {
//     console.error('Failed to create blog post:', error.response ? error.response.data : error);
//   }
// };

const submitBlogBtn = document.getElementById('submit-blog-btn');

submitBlogBtn.addEventListener('click', async () => {
  const titleInput = document.getElementById('blog-title');
  const contentInput = document.getElementById('blog-content');

  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  if (!title || !content) {
    alert('Please fill in both fields.');
    return;
  }

  // POST /api/blog/protected
  try {
    const response = await axios.post(
      backendConfig.url + '/api/blog/protected',
      { title, content },
    );
    console.log(response.data.blog);
  } catch (error) {
    console.error(
      'Failed to create blog post:',
      error.response ? error.response.data : error,
    );
    alert('Could not create blog!');
  }

  titleInput.value = ''; // Clear inputs
  contentInput.value = '';
  window.location.href = './index.html';
});
