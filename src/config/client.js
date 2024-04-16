const { Redis } = require("ioredis");

const client = new Redis(process.env.REDIS_KV_URL);

module.exports = client;