const { getUsersService, getUserByIdService } = require("../services");

const getUsers = async (_req, res) => {
    try {
        const { data, error } = await getUsersService();

        if (error) return res.status(400).json({ status: 400, data: null, message: error?.message });

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

        const { data, error } = await getUserByIdService({ id });

        if (error) return res.status(400).json({ status: 400, data: null, message: error?.message });

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