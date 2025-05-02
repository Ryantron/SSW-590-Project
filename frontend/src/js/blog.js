const titleElement = document.getElementById('blog-title');
const contentElement = document.getElementById('blog-content');

const title = sessionStorage.getItem('blogTitle');
const content = sessionStorage.getItem('blogContent');

if (title && content) {
  titleElement.textContent = title;
  contentElement.textContent = content;
} else {
  titleElement.textContent = 'Blog not found.';
  contentElement.textContent = '';
}
