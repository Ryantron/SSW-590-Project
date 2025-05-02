export const mode = 'development';

export const backendConfig = {
  url: 'http://localhost:3001',
};

if (!mode) {
  throw new Error('NODE_ENV must be set by webpack');
}

if (!backendConfig.url) {
  throw new Error('BACKEND_URL must be set by webpack');
}

console.log(`Mode: ${mode}; Backend URL: ${backendConfig.url}`);
