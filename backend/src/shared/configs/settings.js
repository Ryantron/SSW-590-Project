import dotenv from 'dotenv';
dotenv.config();

if (!process.env.NODE_ENV) {
  throw new Error('NODE_ENV must be set by webpack');
}

if (!process.env.SERVER_URL || !process.env.SERVER_PORT) {
  throw new Error('SERVER_URL and SERVER_PORT must be set in environment.');
}

if (!process.env.FRONTEND_URL) {
  throw new Error('FRONTEND_URL must be set in environment.');
}

if (
  !process.env.SESSION_MONGO_URL ||
  !process.env.SESSION_MONGO_TTL ||
  !process.env.SESSION_MONGO_CRYPTO_SECRET
) {
  throw new Error(
    'SESSION_MONGO_URL, SESSION_MONGO_TTL, and SESSION_MONGO_CRYPTO_SECRET must be set in environment.',
  );
}

if (!process.env.SESSION_SECRET) {
  throw new Error('SESSION_SECRET must be set in environment.');
}

if (!process.env.ADMIN_USERNAME || !process.env.ADMIN_PASSWORD) {
  throw new Error(
    'ADMIN_USERNAME and ADMIN_PASSWORD must be set in environment.',
  );
}

export const mode = process.env.NODE_ENV;

export const serverConfig = {
  url: process.env.SERVER_URL,
  port: process.env.SERVER_PORT,
};

export const frontendConfig = {
  url: process.env.FRONTEND_URL,
};

export const corsConfig = {
  origin: function (origin, callback) {
    const allowedOrigins =
      mode === 'development'
        ? ['http://127.0.0.1:8080', 'http://localhost:8080']
        : [
            'https://staging.d2vqm35c9883o7.amplifyapp.com/',
            'https://production.d2vqm35c9883o7.amplifyapp.com/',
          ]; // mingling of staging and production cors is bad.
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

console.log(corsConfig);

export const sessionConfig = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * process.env.SESSION_MONGO_TTL,
    secure: mode === 'development' ? false : true,
    sameSite: mode === 'development' ? 'lax' : 'strict',
  },
  store: {
    mongoUrl: process.env.SESSION_MONGO_URL,
    ttl: process.env.SESSION_MONGO_TTL,
    crypto: {
      secret: process.env.SESSION_MONGO_CRYPTO_SECRET,
    },
  },
};

console.log(sessionConfig);

export const adminConfig = {
  username: process.env.ADMIN_USERNAME,
  password: process.env.ADMIN_PASSWORD,
};
