const { Redis } = require("ioredis");

const client = new Redis({
    url: process.env.KV_URL
});

console.log(process.env.KV_URL)

module.exports = client;