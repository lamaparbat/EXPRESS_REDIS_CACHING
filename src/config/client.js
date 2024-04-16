const { Redis } = require("ioredis");


console.log({ REDIS: process.env.KV_URL})

const client = new Redis({
    url: process.env.KV_URL,
    socket: {
        tls: true,
    },
});

module.exports = client;