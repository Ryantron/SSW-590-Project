import axios from 'axios';
import { backendConfig } from './config.js';

const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  try {
    const response = await axios.post(backendConfig.url + '/api/auth/login', {
      username,
      password,
    });

    console.log(response.status);

    if (response.status === 200) {
      console.log('Login successful:', response.data.message);
      window.location.href = './index.html';
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 400) {
        errorMessage.innerHTML =
          'Incorrect input. Please check your username and password.';
      } else if (error.response.status === 401) {
        errorMessage.innerHTML = 'Unauthorized. Invalid username or password.';
      } else {
        errorMessage.innerHTML =
          'An unexpected error occurred. Please try again.';
      }
    } else {
      errorMessage.innerHTML = 'Could not connect to server.';
    }
    console.error('Login failed:', error);
  }
});
