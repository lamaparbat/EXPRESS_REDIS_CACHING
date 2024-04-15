const { Router } = require('express');
const { getUsers, getUserById } = require('../controller');


const router = Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);

module.exports = router;