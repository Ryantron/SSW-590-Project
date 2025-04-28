import axios from 'axios';

// POST /api/auth/login
const login = async (username, password) => {
  try {
    const response = await axios.post('/api/auth/login', {
      username,
      password,
    });
    console.log(response.data.message); // Log the message from the server
  } catch (error) {
    console.error(
      'Login failed:',
      error.response ? error.response.data : error,
    );
  }
};

// Example usage
login('user123', 'password123');
