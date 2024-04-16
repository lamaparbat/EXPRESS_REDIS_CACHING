const redisClient = require("../../../config/client");
const { fetchUsers } = require("../../../lib/services/users");

const getUsersService = async () => {
    try {
        const cacheValue = await redisClient.get("users");

        console.log(cacheValue);

        if (cacheValue) return { data: JSON.parse(cacheValue), error: null };

        const { data } = await fetchUsers();

        if (data) {
            await redisClient.set("users", JSON.stringify(data));
            await redisClient.expire("users", 30);
        }

        return { data: data ?? [], error: null };
    } catch (error) {
        console.error(error);
        return { data: null, error: error }
    }
}

const getUserByIdService = async (payload = {}) => {
    try {
        const { id } = payload;

        const cacheValue = await redisClient.get(`users:${id}`);

        if (cacheValue) return { data: JSON.parse(cacheValue), error: null };

        const { data } = await fetchUsers(id);

        if (data) {
            await redisClient.set(`users:${id}`, JSON.stringify(data));
            await redisClient.expire(`users:${id}`, 30);
        }

        return { data: data ?? [], error: null };
    } catch (error) {
        console.error(error);
        return { data: null, error: error };
    }
}

module.exports = {
    getUsersService,
    getUserByIdService,
}