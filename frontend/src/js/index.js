// import axios from 'axios';

export function exampleFunction() {
  return true;
}

// // GET /api/blog
// const getBlogs = async () => {
//   try {
//     const response = await axios.get('/api/blog');
//     const blogs = response.data.blogs; // Array of blog objects

//     const blogList = document.getElementById('blog-list');

//     // Clear the list before adding new blogs (optional)
//     blogList.innerHTML = '';

//     // Loop through each blog and create a list item
//     blogs.forEach(blog => {
//       const listItem = document.createElement('li');
//       listItem.textContent = blog.title; // Use the title of the blog
//       blogList.appendChild(listItem); // Add the list item to the ordered list
//     });
//   } catch (error) {
//     console.error('Failed to fetch blogs:', error.response ? error.response.data : error);
//   }
// };

// // GET /api/blog?search=keyword
// const searchBlogsByKeyword = async (keyword) => {
//   try {
//     const response = await axios.get(`/api/blog`, {
//       params: { search: keyword.trim() },
//     });
//     console.log(response.data.blogs); // Array of matched blog objects
//     return response.data.blogs;
//   } catch (error) {
//     console.error('Failed to search blogs:', error.response ? error.response.data : error);
//     return [];
//   }
// };

// // POST /api/blog/protected
// const createBlogPost = async (title, content) => {
//   try {
//     const response = await axios.post('/api/blog/protected', {
//       title,
//       content,
//     });
//     console.log(response.data.blog); // New blog object with _id, title, content, and datePosted
//   } catch (error) {
//     console.error('Failed to create blog post:', error.response ? error.response.data : error);
//   }
// };

// // Example usage
// getBlogById('12345');
// // Fetch and display blogs when the page is loaded
// window.onload = () => {
//   getBlogs();
// };
