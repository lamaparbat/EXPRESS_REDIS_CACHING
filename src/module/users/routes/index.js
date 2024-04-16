const { Router } = require('express');
const { userAuth, rateLimiter } = require('../middleware');
const { getUsers, getUserById } = require('../controller');


const router = Router();

router.get("/users", userAuth, rateLimiter, getUsers);
router.get("/users/:id", userAuth, rateLimiter, getUserById);

module.exports = router;