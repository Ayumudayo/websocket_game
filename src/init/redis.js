// src/init/redis.js
import Redis from 'ioredis';
import dotenv from 'dotenv';

dotenv.config();

const redisClient = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
});

redisClient.on('error', (err) => {
    console.error('Redis client error:', err);
});

redisClient.on('connect', () => {
    console.log('Connected to Redis');
});

export default redisClient;
