const DEFAULT_HOST = 'localhost';
const DEFAULT_DEV_HOST = '0.0.0.0';
const DEFAULT_MONGO_URI = 'mongodb://mongo:27017';
const DEFAULT_PORT = 3004;
const DEFAULT_DEV_PORT = 3001;
const DEFAULT_API_PORT = 3002;
const DEFAULT_NODE_ENV = 'production';

const {
    VERSION_NUMBER,
    NODE_ENV,
    HOST, PORT,
    DEV_HOST, DEV_PORT,
    API_HOST, API_PORT,
    MONGO_URI,
    MAILGUN_API_KEY, MAILGUN_DOMAIN
} = process.env;

export const isBrowser = process.browser;
export const nodeEnv = NODE_ENV || DEFAULT_NODE_ENV;
export const versionNumber = VERSION_NUMBER;
export const host = HOST || DEFAULT_HOST;
export const port = PORT || DEFAULT_PORT;
export const devHost = DEV_HOST || DEFAULT_DEV_HOST;
export const devPort = DEV_PORT || DEFAULT_DEV_PORT;
export const apiHost = API_HOST || DEFAULT_HOST;
export const apiPort = API_PORT || DEFAULT_API_PORT;
export const mongoUri = MONGO_URI || DEFAULT_MONGO_URI;
export const mailgunApiKey = MAILGUN_API_KEY || 'XX';
export const mailgunDomain = MAILGUN_DOMAIN || 'XX';