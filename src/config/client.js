const { Redis } = require("ioredis");

const client = new Redis({
    url: process.env.REDIS_URI
});

module.exports = client;