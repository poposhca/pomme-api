const redisConfig = {
    user: process.env.REDIS_USER || 'default-user',
    password: process.env.REDIS_PASSWORD || 'default-password',
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || '6379',
};

const appConfig = {
    port: Number(process.env.PORT) || 8080,
    cors: {
        origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
        methods: process.env.CORS_METHODS || '*',
    },
}

export {
    redisConfig,
    appConfig,
};
