const redisClient = require("../../../config/client");

const rateLimiter = async (req, res, next) => {
    try {
        const callLimit = 10;

        const { headers, connection } = req;
        const ipAddress = headers['x-forwarded-for'] || connection.remoteAddress;

        const ttl = await redisClient.ttl(ipAddress);
        const callCount = await redisClient.incr(ipAddress);

        if(callCount === 1) await redisClient.expire(ipAddress, 30);
        if (callCount > callLimit) return res.status(429).send({ status: 429, ttl, message: "Too Many Requests!" });

        next();
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: 500, message: error.message });
    }
}



module.exports = rateLimiter;