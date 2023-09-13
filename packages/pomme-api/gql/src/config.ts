const redisConfig = {
    user: process.env.REDIS_USER || 'default-user',
    password: process.env.REDIS_PASSWORD || 'default-password',
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || '6379',
};

export {
    redisConfig,
};
