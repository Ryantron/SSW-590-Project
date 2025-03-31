import { MongoClient } from 'mongodb';

let _connection = undefined;
let _db = undefined;

if (!process.env.DATA_STORAGE_MONGO_URL || !process.env.DATA_STORAGE_MONGO_DB) {
  throw new Error(
    'DATA_STORAGE_MONGO_URL and DATA_STORAGE_MONGO_DB must be set in environment.',
  );
}

/**
 *
 * @returns {Promise<Db>}
 */
export const dbConnection = async () => {
  if (!_connection) {
    _connection = await MongoClient.connect(process.env.DATA_STORAGE_MONGO_URL);
    _db = _connection.db(process.env.DATA_STORAGE_MONGO_DB);
  }

  return _db;
};

export const closeConnection = async () => {
  if (_connection) await _connection.close();
  else throw new Error('Mongo Connection not found');
};

const getCollectionFn = (collection) => {
  let _col = undefined;

  return async () => {
    if (!_col) {
      const db = await dbConnection();
      if (!db) throw new Error('Error: cannot connect to db');
      _col = db.collection(collection);
    }

    return _col;
  };
};

/**
 *
 * @param {string} collection
 */
const dropCollectionFn = async (collection) => {
  const db = await dbConnection();
  if (!db) throw new Error('Error: cannot connect to db');
  await db.dropCollection(collection);
};

export const blogs = getCollectionFn('blogs');
export const dropBlogs = () => dropCollectionFn('blogs');
