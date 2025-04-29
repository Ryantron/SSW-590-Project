if (!window.process.env.NODE_ENV) {
  throw new Error('NODE_ENV must be set by webpack');
}

export const mode = window.process.env.NODE_ENV;

export const backendConfig = {
  url: 'localhost:3001',
};
