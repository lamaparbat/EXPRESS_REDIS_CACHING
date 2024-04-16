const axios = require('axios');

const fetchUsers = async (id) => {
    try {
        let url = process.env.JSON_PLACEHOLDER_BASE_URL;

        if (id) url = `${url}/${id}`;

        const result = await axios.get(url);
        return result;
    } catch (error) {
        return [];
    }
}

module.exports = {
    fetchUsers,
}