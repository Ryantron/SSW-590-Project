import axios from 'axios';
import { backendConfig } from './config.js';

// Redirects user to login page if not logged in
const isLoggedIn = localStorage.getItem('isLoggedIn');
if (isLoggedIn !== 'true') {
  alert('You must be logged in to create a blog.');
  window.location.href = './login.html';
}

const submitBlogBtn = document.getElementById('submit-blog-btn');

// Clears input fields for user to create a new blog
document.addEventListener('DOMContentLoaded', () => {
  const titleInput = document.getElementById('blog-title');
  const contentInput = document.getElementById('blog-content');

  titleInput.value = ''; // Clear the title field
  contentInput.value = ''; // Clear the content field
});

// Event listener to create new blog
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
      { withCredentials: true },
    );
    console.log(response.data.blog);
  } catch (error) {
    console.error(
      'Failed to create blog post:',
      error.response ? error.response.data : error,
    );
    alert('Could not create blog!');
  }

  titleInput.value = '';
  contentInput.value = '';
  window.location.href = './index.html';
});
