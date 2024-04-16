const { Redis } = require("ioredis");

const client = new Redis({
    url: process.env.KV_URL,
    password: process.env.KV_REST_API_TOKEN,
});

module.exports = client;