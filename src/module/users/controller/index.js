const { fetchUsers } = require("../../../lib/services/users");
const redisClient = require("../../../config/client");

const getUsers = async (_req, res) => {
    try {
        const cacheValue = await redisClient.get("users");

        if (cacheValue) return res.send({ status: 200, data: JSON.parse(cacheValue) });

        const { data } = await fetchUsers();

        await redisClient.set("users", JSON.stringify(data));
        await redisClient.expire("users", 30);

        res.json({ status: 200, data: data });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: 500, message: "500 SERVER ERROR!" });
    }
}

const getUserById = async (req, res) => {
    try {
        const { params } = req;
        const { id } = params ?? {};

        const cacheValue = await redisClient.get(`users:${id}`);

        if (cacheValue) return res.send({ status: 200, data: JSON.parse(cacheValue) });

        const { data } = await fetchUsers(id);

        await redisClient.set(`users:${id}`, JSON.stringify(data));
        await redisClient.expire(`users:${id}`, 30);

        res.send({ status: 200, data: data });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: 500, message: "500 SERVER ERROR!" });
    }
}

module.exports = {
    getUsers,
    getUserById
}