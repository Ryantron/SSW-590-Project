import axios from 'axios';
import { backendConfig } from './config.js';

export function exampleFunction() {
  return true;
}

// GET /api/blog
const getBlog = async () => {
  try {
    const response = await axios.get(backendConfig.url + '/api/blog');
    const blogs = response.data.blogs;

    const blogList = document.getElementById('blog-list');
    const noBlogsMessage = document.getElementById('no-blogs');

    // Clear the list before adding new blogs
    blogList.innerHTML = '';

    if (blogs.length === 0) {
      noBlogsMessage.hidden = false;
    } else {
      noBlogsMessage.hidden = true;

      blogs.forEach((blog) => {
        const listItem = document.createElement('li');

        const link = document.createElement('a');
        link.href = './blog.html';
        link.textContent = blog.title;
        link.classList.add('blog-link');

        // Store blog data as data attributes
        link.dataset.title = blog.title;
        link.dataset.content = blog.content;

        listItem.appendChild(link);
        blogList.appendChild(listItem);
      });
    }
  } catch (error) {
    console.error(
      'Failed to fetch blogs:',
      error.response ? error.response.data : error,
    );
  }
};

// GET /api/blog?search=keyword
// const searchBlogsByKeyword = async (keyword) => {
//   try {
//     const response = await axios.get(backendConfig.url + '/api/blog', {
//       params: { search: keyword.trim() },
//     });
//     console.log(response.data.blogs);
//     return response.data.blogs;
//   } catch (error) {
//     console.error('Failed to search blogs:', error.response ? error.response.data : error);
//     return [];
//   }
// };

getBlog();

document.querySelectorAll('.blog-link').forEach((link) => {
  link.addEventListener('click', (event) => {
    const title = event.target.dataset.title;
    const content = event.target.dataset.content;

    sessionStorage.setItem('blogTitle', title);
    sessionStorage.setItem('blogContent', content);
  });
});
