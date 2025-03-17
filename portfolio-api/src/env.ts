import { load } from 'ts-dotenv';

export default load({
    PORT: Number,
    CORS_ALLOWED_ORIGINS: String,
    API_KEY: String,
    SECRET_KEY: String,
    SENDER_EMAIL: String,
    RECEIVER_EMAIL: String,
    NODE_ENV: String,
});
