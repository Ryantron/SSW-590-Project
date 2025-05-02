export const mode = window.process.env.NODE_ENV;

export const backendConfig = {
  url: window.process.env.BACKEND_URL,
};

if (!mode) {
  throw new Error('NODE_ENV must be set by webpack');
}

if (!backendConfig.url) {
  throw new Error('BACKEND_URL must be set by webpack');
}

console.log(`Mode: ${mode}; Backend URL: ${backendConfig.url}`);
