const { Redis } = require("ioredis");

const client = new Redis(process.env.KV_URL);

module.exports = client;